(function() {
  define(function() {
    var Cube;
    return Cube = (function() {
      function Cube() {
        Cube.geometry || (Cube.geometry = new THREE.CubeGeometry(100, 100, 100));
        this.material = new THREE.MeshPhongMaterial({
          color: Math.round(Math.random() * 0xffffff),
          ambient: Math.round(Math.random() * 0xffffff),
          specular: Math.round(Math.random() * 0xffffff),
          shading: THREE.NoShading
        });
        this.mesh = new THREE.Mesh(Cube.geometry, this.material);
        this.velocity = {
          x: 0.1 * Math.random() - 0.05,
          y: 0.1 * Math.random() - 0.05,
          z: 0.1 * Math.random() - 0.05
        };
      }

      Cube.prototype.animate = function() {
        this.mesh.rotation.x += this.velocity.x;
        this.mesh.rotation.y += this.velocity.y;
        return this.mesh.rotation.z += this.velocity.z;
      };

      return Cube;

    })();
  });

}).call(this);

//# sourceMappingURL=cube.js.map
