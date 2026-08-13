using UnityEngine;

public class Ply_SoundManager : Ply_Singleton<Ply_SoundManager>
{
	public FxAudio fxAudio;

	public AudioSource bgm1;

	private AudioSource[] fx = new AudioSource[20];

	private bool isMute = false;

	public void PlayFx(FxType fxType)
	{
		if (isMute)
		{
			return;
		}
		SoundData data = GetSoundData(fxType);
		if (data == null || data.clip == null)
		{
			return;
		}
		int index = (int)fxType;
		if (index < fx.Length && fx[index] == null)
		{
			fx[index] = new GameObject("SoundFX_" + fxType).AddComponent<AudioSource>();
		}
		if (index < fx.Length)
		{
			fx[index].clip = data.clip;
			fx[index].Play();
			for (int i = 1; i < data.repeatCount; i++)
			{
				fx[index].PlayOneShot(data.clip);
			}
		}
	}

	public void PlayLoopFx(FxType fxType)
	{
		if (isMute)
		{
			return;
		}
		SoundData data = GetSoundData(fxType);
		if (data != null && !(data.clip == null))
		{
			int index = (int)fxType;
			if (index < fx.Length && fx[index] == null)
			{
				fx[index] = new GameObject("SoundFX_Loop_" + fxType).AddComponent<AudioSource>();
			}
			if (index < fx.Length)
			{
				fx[index].clip = data.clip;
				fx[index].loop = true;
				fx[index].Play();
			}
		}
	}

	public void StopFx(FxType fxType)
	{
		if (fxType >= FxType.Click && (int)fxType < fx.Length && fx[(int)fxType] != null)
		{
			fx[(int)fxType].Stop();
		}
	}

	public void PlayBGM1()
	{
		if (!isMute && bgm1 != null && !bgm1.isPlaying)
		{
			bgm1.Play();
		}
	}

	public void PlayBGM2()
	{
		PlayBGM1();
	}

	private SoundData GetSoundData(FxType type)
	{
		switch (type)
		{
		case FxType.Click:
			return fxAudio.ClickBox;
		case FxType.Happy:
			return fxAudio.Happy;
		case FxType.Wrong:
			return fxAudio.Wrong;
		case FxType.Spray:
			return fxAudio.Spray;
		case FxType.Brush:
			return fxAudio.Brush;
		case FxType.Keo:
			return fxAudio.Keo;
		case FxType.Confetti:
			return fxAudio.Confetti;
		case FxType.Lose2:
			return fxAudio.Lose2;
		case FxType.SelectVini:
			return fxAudio.SelectVini;
		case FxType.SelectMessiMbappe:
			return fxAudio.SelectMessiMbappe;
		case FxType.Tackle:
			return fxAudio.Tackle;
		case FxType.HaalandHurt:
			return fxAudio.HaalandHurt;
		default:
			return null;
		}
	}

	public void MuteFx()
	{
		isMute = true;
		for (int i = 0; i < fx.Length; i++)
		{
			if (fx[i] != null)
			{
				fx[i].Stop();
			}
		}
	}

	public void Mute()
	{
		if (bgm1 != null)
		{
			bgm1.Stop();
		}
		for (int i = 0; i < fx.Length; i++)
		{
			if (fx[i] != null)
			{
				fx[i].Stop();
			}
		}
	}
}
