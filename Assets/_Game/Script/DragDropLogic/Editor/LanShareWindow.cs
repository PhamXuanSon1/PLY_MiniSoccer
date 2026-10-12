#if UNITY_EDITOR
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.NetworkInformation;
using System.Net.Sockets;
using UnityEditor;
using UnityEngine;
using Debug = UnityEngine.Debug;

/// <summary>
/// Chia sẻ bản chơi thử (Playworks/Luna preview server) cho máy khác trong cùng mạng LAN.
/// Tools ▸ Playable ▸ Chơi qua LAN.
/// Server preview của Luna chạy ngay trong Unity (mặc định port 8018) và đã lắng nghe trên mọi card mạng;
/// vấn đề thường gặp là Windows Firewall / mạng đang ở chế độ Public ➔ tool này kiểm tra và mở giúp.
/// </summary>
public class LanShareWindow : EditorWindow
{
    private const string RulePrefix = "PLY MiniSoccer LAN ";

    private class Adapter
    {
        public string name;
        public string ip;
        public string profile = "?";   // Private / Public / DomainAuthenticated
    }

    [SerializeField] private int port = 8018;
    [SerializeField] private int selected;

    private readonly List<Adapter> adapters = new List<Adapter>();
    private bool serverUp;
    private bool ruleExists;
    private string lastMessage = "";
    private Vector2 scroll;

    [MenuItem("Tools/Playable/Chơi qua LAN")]
    private static void Open()
    {
        var w = GetWindow<LanShareWindow>("Chơi qua LAN");
        w.minSize = new Vector2(420, 380);
        w.Refresh();
    }

    private void OnEnable() { Refresh(); }
    private void OnFocus() { Refresh(); }

    // ───────────────────────────── Kiểm tra ─────────────────────────────
    private void Refresh()
    {
        adapters.Clear();
        foreach (var ni in NetworkInterface.GetAllNetworkInterfaces())
        {
            if (ni.OperationalStatus != OperationalStatus.Up) continue;
            if (ni.NetworkInterfaceType == NetworkInterfaceType.Loopback) continue;
            foreach (var ua in ni.GetIPProperties().UnicastAddresses)
            {
                if (ua.Address.AddressFamily != AddressFamily.InterNetwork) continue;
                string ip = ua.Address.ToString();
                if (ip.StartsWith("169.254.")) continue;   // link-local, không dùng được
                adapters.Add(new Adapter { name = ni.Name, ip = ip });
            }
        }
        // IP LAN thông dụng lên đầu
        adapters.Sort((a, b) => IsLan(b.ip).CompareTo(IsLan(a.ip)));
        selected = Mathf.Clamp(selected, 0, Mathf.Max(0, adapters.Count - 1));

        serverUp = IsPortOpen("127.0.0.1", port);

#if UNITY_EDITOR_WIN
        string profiles = RunPowerShell("(Get-NetConnectionProfile | ForEach-Object { $_.InterfaceAlias + '|' + $_.NetworkCategory }) -join ';'");
        foreach (var pair in (profiles ?? "").Split(new[] { ';' }, StringSplitOptions.RemoveEmptyEntries))
        {
            var kv = pair.Split('|');
            if (kv.Length != 2) continue;
            foreach (var a in adapters) if (a.name == kv[0].Trim()) a.profile = kv[1].Trim();
        }
        string count = RunPowerShell($"(Get-NetFirewallRule -DisplayName '{RulePrefix}{port}' -ErrorAction SilentlyContinue | Measure-Object).Count");
        ruleExists = count != null && count.Trim() != "0" && count.Trim() != "";
#endif
        Repaint();
    }

    private static int IsLan(string ip)
    {
        if (ip.StartsWith("192.168.") || ip.StartsWith("10.")) return 2;
        if (ip.StartsWith("172.")) return 1;
        return 0;
    }

    private static bool IsPortOpen(string host, int p)
    {
        try
        {
            using (var c = new TcpClient())
            {
                var ar = c.BeginConnect(host, p, null, null);
                bool ok = ar.AsyncWaitHandle.WaitOne(500);
                if (ok) c.EndConnect(ar);
                return ok && c.Connected;
            }
        }
        catch { return false; }
    }

    private static string RunPowerShell(string command)
    {
        try
        {
            var psi = new ProcessStartInfo("powershell.exe", "-NoProfile -NonInteractive -Command \"" + command.Replace("\"", "\\\"") + "\"")
            {
                UseShellExecute = false,
                RedirectStandardOutput = true,
                CreateNoWindow = true
            };
            using (var p = Process.Start(psi))
            {
                string o = p.StandardOutput.ReadToEnd();
                p.WaitForExit(5000);
                return o.Trim();
            }
        }
        catch (Exception e) { Debug.LogWarning("[LAN] " + e.Message); return null; }
    }

    /// <summary>Chạy PowerShell với quyền Admin (Windows sẽ hiện hộp thoại UAC để người dùng đồng ý).</summary>
    private static void RunElevated(string command)
    {
        try
        {
            Process.Start(new ProcessStartInfo("powershell.exe", "-NoProfile -ExecutionPolicy Bypass -Command \"" + command.Replace("\"", "\\\"") + "\"")
            {
                UseShellExecute = true,
                Verb = "runas",
                WindowStyle = ProcessWindowStyle.Hidden
            });
        }
        catch (Exception e) { Debug.LogWarning("[LAN] Đã huỷ / không chạy được quyền Admin: " + e.Message); }
    }

    // ───────────────────────────── GUI ─────────────────────────────
    private void OnGUI()
    {
        scroll = EditorGUILayout.BeginScrollView(scroll);
        EditorGUILayout.Space(6);
        EditorGUILayout.LabelField("Cho máy khác cùng mạng chơi thử game", EditorStyles.boldLabel);
        EditorGUILayout.HelpBox(
            "Máy khác (điện thoại / laptop) phải nối CÙNG Wi-Fi / mạng LAN với máy này, rồi mở link bên dưới bằng trình duyệt.\n" +
            "Server chơi thử của Luna phải đang chạy (Unity đang mở project).", MessageType.Info);

        using (new EditorGUILayout.HorizontalScope())
        {
            port = EditorGUILayout.IntField("Port", port);
            if (GUILayout.Button("↻ Kiểm tra lại", GUILayout.Width(110))) Refresh();
        }

        // ── 1. Server
        EditorGUILayout.Space(6);
        EditorGUILayout.LabelField("1. Server chơi thử", EditorStyles.boldLabel);
        Status(serverUp, serverUp ? $"Đang chạy ở port {port}" : $"Không thấy server ở port {port} (mở Tools ▸ Unity Playworks Plugin để kiểm tra, hoặc đổi Port)");

        // ── 2. Link
        EditorGUILayout.Space(6);
        EditorGUILayout.LabelField("2. Link cho máy khác", EditorStyles.boldLabel);
        if (adapters.Count == 0)
        {
            Status(false, "Không tìm thấy card mạng nào đang kết nối.");
        }
        else
        {
            for (int i = 0; i < adapters.Count; i++)
            {
                var a = adapters[i];
                string url = $"http://{a.ip}:{port}/";
                using (new EditorGUILayout.HorizontalScope(EditorStyles.helpBox))
                {
                    if (EditorGUILayout.Toggle(selected == i, EditorStyles.radioButton, GUILayout.Width(16))) selected = i;
                    using (new EditorGUILayout.VerticalScope())
                    {
                        EditorGUILayout.SelectableLabel(url, EditorStyles.boldLabel, GUILayout.Height(18));
                        EditorGUILayout.LabelField($"{a.name}  •  mạng: {a.profile}", EditorStyles.miniLabel);
                    }
                    if (GUILayout.Button("Copy", GUILayout.Width(50), GUILayout.Height(30))) { EditorGUIUtility.systemCopyBuffer = url; lastMessage = "Đã copy: " + url; }
                    if (GUILayout.Button("Mở", GUILayout.Width(40), GUILayout.Height(30))) Application.OpenURL(url);
                }
            }
        }

        // ── 3. Firewall
        EditorGUILayout.Space(6);
        EditorGUILayout.LabelField("3. Windows Firewall", EditorStyles.boldLabel);
#if UNITY_EDITOR_WIN
        var cur = adapters.Count > 0 ? adapters[selected] : null;
        bool isPublic = cur != null && cur.profile == "Public";

        Status(ruleExists, ruleExists ? $"Đã có luật cho phép port {port}" : $"Chưa có luật cho phép port {port}");
        Status(!isPublic, cur == null ? "Chưa biết loại mạng" :
            isPublic ? "Mạng đang là PUBLIC ➔ Unity bị Windows chặn kết nối vào. Cần chuyển sang Private."
                     : $"Loại mạng: {cur.profile}");

        using (new EditorGUILayout.HorizontalScope())
        {
            if (GUILayout.Button(ruleExists ? "Tạo lại luật cho phép port" : "Mở port trong Firewall", GUILayout.Height(26)))
            {
                RunElevated($"Get-NetFirewallRule -DisplayName '{RulePrefix}{port}' -ErrorAction SilentlyContinue | Remove-NetFirewallRule; " +
                            $"New-NetFirewallRule -DisplayName '{RulePrefix}{port}' -Direction Inbound -Protocol TCP -LocalPort {port} -Action Allow -Profile Any");
                lastMessage = "Đã gửi lệnh (đồng ý hộp thoại UAC). Bấm 'Kiểm tra lại' sau vài giây.";
            }
            using (new EditorGUI.DisabledScope(cur == null || !isPublic))
            {
                if (GUILayout.Button("Chuyển mạng này sang Private", GUILayout.Height(26)))
                {
                    RunElevated($"Set-NetConnectionProfile -InterfaceAlias '{cur.name}' -NetworkCategory Private");
                    lastMessage = "Đã gửi lệnh chuyển sang Private (đồng ý hộp thoại UAC). Bấm 'Kiểm tra lại'.";
                }
            }
        }
        if (ruleExists && GUILayout.Button("Gỡ luật đã tạo"))
        {
            RunElevated($"Get-NetFirewallRule -DisplayName '{RulePrefix}{port}' -ErrorAction SilentlyContinue | Remove-NetFirewallRule");
            lastMessage = "Đã gửi lệnh gỡ luật.";
        }
        EditorGUILayout.HelpBox(
            "Hai nút trên chạy bằng quyền Admin (Windows sẽ hỏi xác nhận). Chuyển sang Private chỉ nên làm với Wi-Fi/mạng nhà hoặc công ty tin cậy; " +
            "xong buổi test có thể đổi lại Public và gỡ luật.", MessageType.None);
#else
        EditorGUILayout.HelpBox("Chỉ hỗ trợ tự mở Firewall trên Windows. Trên macOS/Linux hãy cho phép Unity nhận kết nối vào ở cài đặt Firewall.", MessageType.Warning);
#endif

        if (!string.IsNullOrEmpty(lastMessage))
        {
            EditorGUILayout.Space(6);
            EditorGUILayout.HelpBox(lastMessage, MessageType.None);
        }
        EditorGUILayout.EndScrollView();
    }

    private static void Status(bool ok, string text)
    {
        var old = GUI.color;
        GUI.color = ok ? new Color(0.5f, 1f, 0.55f) : new Color(1f, 0.75f, 0.35f);
        EditorGUILayout.LabelField((ok ? "✔  " : "⚠  ") + text, EditorStyles.wordWrappedLabel);
        GUI.color = old;
    }
}
#endif
