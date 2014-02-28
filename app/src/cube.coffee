define ->
  class Cube
    constructor: (@mesh = null) ->
      geometry = new THREE.CubeGeometry 100, 100, 100

      material = new THREE.MeshPhongMaterial(color: 0xffffff, shading: THREE.FlatShading, wireframe: false)

      phys_material = new Physijs.createMaterial(material, 0.0, 0.8)

      @mesh = new Physijs.BoxMesh geometry, phys_material, 100

      @velocity =
        x: 0.1*Math.random() - 0.05
        y: 0.1*Math.random() - 0.05
        z: 0.1*Math.random() - 0.05

    animate: ->
      @mesh.rotation.x += @velocity.x
      @mesh.rotation.y += @velocity.y
      @mesh.rotation.z += @velocity.z
