(function() {
  define(function() {
    var Cube;
    return Cube = (function() {
      function Cube(mesh) {
        var geometry, material, phys_material;
        this.mesh = mesh != null ? mesh : null;
        geometry = new THREE.CubeGeometry(100, 100, 100);
        material = new THREE.MeshPhongMaterial({
          color: 0xffffff,
          shading: THREE.FlatShading,
          wireframe: false
        });
        phys_material = new Physijs.createMaterial(material, 0.0, 0.8);
        this.mesh = new Physijs.BoxMesh(geometry, phys_material, 100);
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
