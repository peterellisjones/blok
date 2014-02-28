(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['cube'], function(Cube) {
    var Scene;
    return Scene = (function() {
      function Scene() {
        this.animate = __bind(this.animate, this);
        var cube, x, y, z, _i, _j, _k;
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
        this.camera.position.z = 1000;
        this.camera.position.y = 0;
        this.camera.lookAt(new THREE.Vector3(0, 0, 0));
        this.scene = new THREE.Scene();
        this.cubes = [];
        for (z = _i = 0; _i < 3; z = ++_i) {
          for (x = _j = 0; _j < 10; x = ++_j) {
            for (y = _k = 0; _k < 10; y = ++_k) {
              cube = new Cube();
              cube.mesh.position.x = x * 210 - 1000;
              cube.mesh.position.y = y * 210 - 1000;
              cube.mesh.position.z = z * 210 - 1000;
              this.cubes.push(cube);
              this.scene.add(cube.mesh);
            }
          }
        }
        this.dirLight = new THREE.DirectionalLight(0xffffff, 1.0);
        this.dirLight.position.set(1, 1, 1);
        this.dirLight.shadowCameraVisible = true;
        this.scene.add(this.dirLight);
        this.dirLight = new THREE.DirectionalLight(0xff0000, 1.0);
        this.dirLight.position.set(0, 0, 1);
        this.dirLight.shadowCameraVisible = true;
        this.scene.add(this.dirLight);
        this.renderer = new THREE.CanvasRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
      }

      Scene.prototype.animate = function() {
        var cube, _i, _len, _ref;
        requestAnimationFrame(this.animate);
        _ref = this.cubes;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          cube = _ref[_i];
          cube.animate();
        }
        return this.renderer.render(this.scene, this.camera);
      };

      return Scene;

    })();
  });

}).call(this);

//# sourceMappingURL=scene.js.map
