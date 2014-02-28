(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['cube'], function(Cube) {
    var Scene;
    return Scene = (function() {
      function Scene() {
        this.animate = __bind(this.animate, this);
        var cube, ground, ground_material, x, y, z, _i, _j, _k;
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
        this.camera.position.z = 1000;
        this.camera.position.y = 0;
        this.camera.lookAt(new THREE.Vector3(0, 0, 0));
        this.scene = new Physijs.Scene;
        this.scene.setGravity(new THREE.Vector3(0, -30, 0));
        ground_material = Physijs.createMaterial(new THREE.MeshLambertMaterial({
          color: 0x404040,
          shading: THREE.SmoothShading
        }), 0.8, 0.4);
        ground = new Physijs.BoxMesh(new THREE.CubeGeometry(2000, 10, 2000), ground_material, 0);
        ground.position.y = -500;
        ground.position.x = 0;
        ground.position.z = -1000;
        ground.receiveShadow = true;
        this.scene.add(ground);
        this.cubes = [];
        for (z = _i = 0; _i < 6; z = ++_i) {
          for (x = _j = 2; _j < 8; x = ++_j) {
            for (y = _k = 0; _k < 4; y = ++_k) {
              cube = new Cube;
              cube.mesh.position.x = x * 210 - 1000;
              cube.mesh.position.y = y * 210;
              cube.mesh.position.z = z * 210 - 1000;
              cube.mesh.rotation.x += Math.random() * 10;
              cube.mesh.rotation.y += Math.random() * 10;
              cube.mesh.rotation.z += Math.random() * 10;
              this.cubes.push(cube);
              this.scene.add(cube.mesh);
            }
          }
        }
        this.dirLight = new THREE.DirectionalLight(0xff0000, 1.0);
        this.dirLight.position.set(0, 1, 1);
        this.dirLight.shadowCameraVisible = true;
        this.dirLight.castShadow = true;
        this.scene.add(this.dirLight);
        this.renderer = new THREE.CanvasRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
      }

      Scene.prototype.animate = function() {
        this.renderer.render(this.scene, this.camera);
        this.scene.simulate(void 0, 1);
        return requestAnimationFrame(this.animate);
      };

      return Scene;

    })();
  });

}).call(this);

//# sourceMappingURL=scene.js.map
