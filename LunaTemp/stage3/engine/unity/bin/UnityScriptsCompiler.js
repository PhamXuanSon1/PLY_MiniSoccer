if ( TRACE ) { TRACE( JSON.parse( '["BatStrikeController#init","BatStrikeController#Start","BatStrikeController#Update","BatStrikeController#ChargeBat","BatStrikeController#FireBat","BatStrikeController#OnCollisionEnter2D","CameraFollow2D#init","CameraFollow2D#LateUpdate","CupCollision#init","CupCollision#OnCollisionEnter2D","ItemMovementController#init","ItemMovementController#Start","ItemMovementController#Update","ItemMovementController#HandleItemMovement"]' ) ); }
/**
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*BatStrikeController start.*/
    Bridge.define("BatStrikeController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            pullSpeed: 0,
            maxPullDistance: 0,
            strikeForce: 0,
            targetTag: null,
            initialPosition: null,
            hasFired: false,
            rb: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BatStrikeController#init", this ); }

                this.initialPosition = new UnityEngine.Vector3();
                this.pullSpeed = 2.0;
                this.maxPullDistance = 3.0;
                this.strikeForce = 50.0;
                this.targetTag = "Cup";
                this.hasFired = false;
            }
        },
        methods: {
            /*BatStrikeController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "BatStrikeController#Start", this ); }

                this.initialPosition = this.transform.position.$clone();
                this.rb = this.GetComponent(UnityEngine.Rigidbody2D);
                this.rb.bodyType = UnityEngine.RigidbodyType2D.Kinematic;
            },
            /*BatStrikeController.Start end.*/

            /*BatStrikeController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "BatStrikeController#Update", this ); }

                if (!this.hasFired) {
                    if (UnityEngine.Input.GetMouseButton(0)) {
                        this.ChargeBat();
                    }
                    if (UnityEngine.Input.GetMouseButtonUp(0)) {
                        this.FireBat();
                    }
                }
            },
            /*BatStrikeController.Update end.*/

            /*BatStrikeController.ChargeBat start.*/
            ChargeBat: function () {
if ( TRACE ) { TRACE( "BatStrikeController#ChargeBat", this ); }

                var currentDistance = pc.Vec3.distance( this.initialPosition, this.transform.position );
                if (currentDistance < this.maxPullDistance) {
                    this.transform.Translate$1(pc.Vec3.LEFT.clone().clone().scale( this.pullSpeed ).clone().scale( UnityEngine.Time.deltaTime ));
                    if (pc.Vec3.distance( this.initialPosition, this.transform.position ) > this.maxPullDistance) {
                        this.transform.position = this.initialPosition.$clone().add( pc.Vec3.LEFT.clone().clone().scale( this.maxPullDistance ) );
                    }
                }
            },
            /*BatStrikeController.ChargeBat end.*/

            /*BatStrikeController.FireBat start.*/
            FireBat: function () {
if ( TRACE ) { TRACE( "BatStrikeController#FireBat", this ); }

                this.hasFired = true;
                this.rb.bodyType = UnityEngine.RigidbodyType2D.Dynamic;
                var pullDistance = pc.Vec3.distance( this.initialPosition, this.transform.position );
                var forceMultiplier = ((this.maxPullDistance > 0.0) ? (pullDistance / this.maxPullDistance) : 1.0);
                forceMultiplier = Math.max(0.2, Math.min(forceMultiplier, 1.0));
                var finalForce = this.strikeForce * forceMultiplier;
                this.rb.AddForce(pc.Vec2.RIGHT.clone().scale( finalForce ), UnityEngine.ForceMode2D.Impulse);
            },
            /*BatStrikeController.FireBat end.*/

            /*BatStrikeController.OnCollisionEnter2D start.*/
            OnCollisionEnter2D: function (collision) {
if ( TRACE ) { TRACE( "BatStrikeController#OnCollisionEnter2D", this ); }

                if (collision.gameObject.CompareTag(this.targetTag)) {
                    this.rb.linearVelocity = pc.Vec2.ZERO.clone();
                    this.rb.angularVelocity = 0.0;
                    this.rb.bodyType = UnityEngine.RigidbodyType2D.Kinematic;
                }
            },
            /*BatStrikeController.OnCollisionEnter2D end.*/


        }
    });
    /*BatStrikeController end.*/

    /*CameraFollow2D start.*/
    Bridge.define("CameraFollow2D", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            target: null,
            smoothTime: 0,
            offset: null,
            velocity: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CameraFollow2D#init", this ); }

                this.offset = new UnityEngine.Vector3();
                this.velocity = new UnityEngine.Vector3();
                this.smoothTime = 0.25;
                this.offset = new pc.Vec3( 0.0, 0.0, -10.0 );
                this.velocity = pc.Vec3.ZERO.clone();
            }
        },
        methods: {
            /*CameraFollow2D.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "CameraFollow2D#LateUpdate", this ); }

                if (!(UnityEngine.Component.op_Equality(this.target, null))) {
                    var targetPosition = this.target.position.$clone().add( this.offset );
                    this.transform.position = pc.Vec3.smoothDamp( this.transform.position.$clone(), targetPosition.$clone(), Bridge.ref(this, "velocity"), this.smoothTime, Infinity, UnityEngine.Time.deltaTime );
                }
            },
            /*CameraFollow2D.LateUpdate end.*/


        }
    });
    /*CameraFollow2D end.*/

    /*CupCollision start.*/
    Bridge.define("CupCollision", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            baseTag: null,
            objectToActivate: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CupCollision#init", this ); }

                this.baseTag = "Base";
            }
        },
        methods: {
            /*CupCollision.OnCollisionEnter2D start.*/
            OnCollisionEnter2D: function (collision) {
if ( TRACE ) { TRACE( "CupCollision#OnCollisionEnter2D", this ); }

                if (collision.gameObject.CompareTag(this.baseTag) && UnityEngine.GameObject.op_Inequality(this.objectToActivate, null)) {
                    this.objectToActivate.SetActive(true);
                }
            },
            /*CupCollision.OnCollisionEnter2D end.*/


        }
    });
    /*CupCollision end.*/

    /*ItemMovementController start.*/
    Bridge.define("ItemMovementController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            itemLayer: null,
            selectedItem: null,
            offset: null,
            mainCamera: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ItemMovementController#init", this ); }

                this.itemLayer = new UnityEngine.LayerMask();
                this.offset = new UnityEngine.Vector3();
            }
        },
        methods: {
            /*ItemMovementController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "ItemMovementController#Start", this ); }

                this.mainCamera = UnityEngine.Camera.main;
            },
            /*ItemMovementController.Start end.*/

            /*ItemMovementController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "ItemMovementController#Update", this ); }

                this.HandleItemMovement();
            },
            /*ItemMovementController.Update end.*/

            /*ItemMovementController.HandleItemMovement start.*/
            HandleItemMovement: function () {
if ( TRACE ) { TRACE( "ItemMovementController#HandleItemMovement", this ); }

                var mousePosition = this.mainCamera.ScreenToWorldPoint(UnityEngine.Input.mousePosition);
                mousePosition.z = 0.0;
                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    var hit = UnityEngine.Physics2D.Raycast$2(UnityEngine.Vector2.FromVector3(mousePosition), pc.Vec2.ZERO.clone(), Number.POSITIVE_INFINITY, UnityEngine.LayerMask.op_Implicit(this.itemLayer.$clone()));
                    if (UnityEngine.Component.op_Inequality(hit.collider, null) && Bridge.is(hit.collider, UnityEngine.BoxCollider2D)) {
                        this.selectedItem = hit.transform;
                        this.offset = this.selectedItem.position.$clone().sub( mousePosition );
                    }
                }
                if (UnityEngine.Input.GetMouseButton(0) && UnityEngine.Component.op_Inequality(this.selectedItem, null)) {
                    this.selectedItem.position = mousePosition.$clone().add( this.offset );
                }
                if (UnityEngine.Input.GetMouseButtonUp(0) && UnityEngine.Component.op_Inequality(this.selectedItem, null)) {
                    this.selectedItem = null;
                }
            },
            /*ItemMovementController.HandleItemMovement end.*/


        }
    });
    /*ItemMovementController end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine"];

    /*BatStrikeController start.*/
    $m("BatStrikeController", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.Rigidbody2D)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ChargeBat","t":8,"sn":"ChargeBat","rt":$n[0].Void},{"a":1,"n":"FireBat","t":8,"sn":"FireBat","rt":$n[0].Void},{"a":1,"n":"OnCollisionEnter2D","t":8,"pi":[{"n":"collision","pt":$n[1].Collision2D,"ps":0}],"sn":"OnCollisionEnter2D","rt":$n[0].Void,"p":[$n[1].Collision2D]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"hasFired","t":4,"rt":$n[0].Boolean,"sn":"hasFired","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"initialPosition","t":4,"rt":$n[1].Vector3,"sn":"initialPosition"},{"at":[new UnityEngine.TooltipAttribute("Kho\u1ea3ng c\u00e1ch l\u00f9i t\u1ed1i \u0111a (\u0111\u01a1n v\u1ecb Unity).")],"a":2,"n":"maxPullDistance","t":4,"rt":$n[0].Single,"sn":"maxPullDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Charge Settings"),new UnityEngine.TooltipAttribute("T\u1ed1c \u0111\u1ed9 g\u1eady l\u00f9i v\u1ec1 b\u00ean tr\u00e1i khi \u0111ang gi\u1eef m\u00e0n h\u00ecnh.")],"a":2,"n":"pullSpeed","t":4,"rt":$n[0].Single,"sn":"pullSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"rb","t":4,"rt":$n[1].Rigidbody2D,"sn":"rb"},{"at":[new UnityEngine.TooltipAttribute("L\u1ef1c \u0111\u00e1nh v\u0103ng v\u1ec1 b\u00ean ph\u1ea3i t\u1ed1i \u0111a.")],"a":2,"n":"strikeForce","t":4,"rt":$n[0].Single,"sn":"strikeForce","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Collision Settings"),new UnityEngine.TooltipAttribute("Tag c\u1ee7a object Cup (Nh\u1edb g\u00e1n Tag 'Cup' cho Cup trong Unity).")],"a":2,"n":"targetTag","t":4,"rt":$n[0].String,"sn":"targetTag"}]}; }, $n);
    /*BatStrikeController end.*/

    /*CameraFollow2D start.*/
    $m("CameraFollow2D", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"at":[new UnityEngine.TooltipAttribute("V\u1ecb tr\u00ed b\u00f9 tr\u1eeb c\u1ee7a Camera so v\u1edbi Target. Tr\u1ee5c Z lu\u00f4n ph\u1ea3i l\u00e0 s\u1ed1 \u00e2m \u0111\u1ec3 nh\u00ecn th\u1ea5y c\u1ea3nh (VD: -10).")],"a":2,"n":"offset","t":4,"rt":$n[1].Vector3,"sn":"offset"},{"at":[new UnityEngine.HeaderAttribute("\u0110\u1ed9 m\u01b0\u1ee3t & Kho\u1ea3ng c\u00e1ch"),new UnityEngine.TooltipAttribute("Th\u1eddi gian tr\u1ec5 \u0111\u1ec3 Camera \u0111u\u1ed5i k\u1ecbp. C\u00e0ng nh\u1ecf camera b\u00e1m c\u00e0ng s\u00e1t v\u00e0 nhanh, s\u1ed1 to s\u1ebd m\u01b0\u1ee3t nh\u01b0ng ch\u1eadm.")],"a":2,"n":"smoothTime","t":4,"rt":$n[0].Single,"sn":"smoothTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("C\u00e0i \u0111\u1eb7t Target"),new UnityEngine.TooltipAttribute("K\u00e9o v\u1eadt th\u1ec3 m\u00e0 Camera c\u1ea7n \u0111i theo (V\u00ed d\u1ee5: Cup) v\u00e0o \u0111\u00e2y")],"a":2,"n":"target","t":4,"rt":$n[1].Transform,"sn":"target"},{"a":1,"n":"velocity","t":4,"rt":$n[1].Vector3,"sn":"velocity"}]}; }, $n);
    /*CameraFollow2D end.*/

    /*CupCollision start.*/
    $m("CupCollision", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnCollisionEnter2D","t":8,"pi":[{"n":"collision","pt":$n[1].Collision2D,"ps":0}],"sn":"OnCollisionEnter2D","rt":$n[0].Void,"p":[$n[1].Collision2D]},{"at":[new UnityEngine.HeaderAttribute("C\u00e0i \u0111\u1eb7t va ch\u1ea1m"),new UnityEngine.TooltipAttribute("Tag c\u1ee7a thanh Base (nh\u1edb g\u00e1n Tag n\u00e0y cho c\u00e1c object con c\u1ee7a Base)")],"a":2,"n":"baseTag","t":4,"rt":$n[0].String,"sn":"baseTag"},{"at":[new UnityEngine.TooltipAttribute("K\u00e9o th\u1ea3 object b\u1ea1n mu\u1ed1n b\u1eadt (hi\u1ec3n th\u1ecb l\u00ean) v\u00e0o \u0111\u00e2y")],"a":2,"n":"objectToActivate","t":4,"rt":$n[1].GameObject,"sn":"objectToActivate"}]}; }, $n);
    /*CupCollision end.*/

    /*ItemMovementController start.*/
    $m("ItemMovementController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"HandleItemMovement","t":8,"sn":"HandleItemMovement","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.HeaderAttribute("Settings"),new UnityEngine.TooltipAttribute("Select 'Item' Layer here in the Inspector")],"a":2,"n":"itemLayer","t":4,"rt":$n[1].LayerMask,"sn":"itemLayer"},{"a":1,"n":"mainCamera","t":4,"rt":$n[1].Camera,"sn":"mainCamera"},{"a":1,"n":"offset","t":4,"rt":$n[1].Vector3,"sn":"offset"},{"a":1,"n":"selectedItem","t":4,"rt":$n[1].Transform,"sn":"selectedItem"}]}; }, $n);
    /*ItemMovementController end.*/

    }});
