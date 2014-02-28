define ->
  class Cube
    constructor: () ->
      Cube.geometry ||= new THREE.CubeGeometry 100, 100, 100

      @material = new THREE.MeshPhongMaterial
        color: Math.round(Math.random() * 0xffffff)
        ambient: Math.round(Math.random() * 0xffffff)
        specular: Math.round(Math.random() * 0xffffff)
        shading: THREE.NoShading

      @mesh = new THREE.Mesh Cube.geometry, @material



      @velocity =
        x: 0.1*Math.random() - 0.05
        y: 0.1*Math.random() - 0.05
        z: 0.1*Math.random() - 0.05

    animate: ->
      @mesh.rotation.x += @velocity.x
      @mesh.rotation.y += @velocity.y
      @mesh.rotation.z += @velocity.z
