define ['cube'], (Cube) ->
  class Scene

    constructor: () ->

      @camera = new THREE.PerspectiveCamera(
        75, window.innerWidth / window.innerHeight, 1, 10000
      )

      @camera.position.z = 1000
      @camera.position.y = 0
      @camera.lookAt new THREE.Vector3(0, 0, 0)

      @scene = new Physijs.Scene
      @scene.setGravity new THREE.Vector3( 0, -30, 0 )

      ground_material = Physijs.createMaterial(new THREE.MeshLambertMaterial(color: 0x404040, shading: THREE.SmoothShading), 0.8, 0.4)
      ground = new Physijs.BoxMesh(
        new THREE.CubeGeometry(2000, 10, 2000),
        ground_material,
        0)
      ground.position.y = -500
      ground.position.x = 0
      ground.position.z = -1000
      ground.receiveShadow = true
      @scene.add(ground)

      # add cubes
      @cubes = []

      for z in [0...6]
        for x in [2...8]
          for y in [0...4]
            cube = new Cube
            #shift.setPosition new THREE.Vector3( , 0, z * 200 - 1000 )
            cube.mesh.position.x = x * 210 - 1000
            cube.mesh.position.y = y * 210
            cube.mesh.position.z = z * 210 - 1000
            cube.mesh.rotation.x += Math.random() * 10
            cube.mesh.rotation.y += Math.random() * 10
            cube.mesh.rotation.z += Math.random() * 10
            @cubes.push cube
            @scene.add cube.mesh

      # add directional light
      @dirLight = new THREE.DirectionalLight(0xff0000, 1.0)
      @dirLight.position.set 0, 1, 1
      @dirLight.shadowCameraVisible = true
      @dirLight.castShadow = true
      @scene.add @dirLight

      # @dirLight = new THREE.DirectionalLight(0xff0000, 1.0)
      # @dirLight.position.set 0, 0, 1
      # @dirLight.shadowCameraVisible = true
      # @scene.add @dirLight

      @renderer = new THREE.CanvasRenderer()
      @renderer.setSize window.innerWidth, window.innerHeight

      document.body.appendChild @renderer.domElement

    animate: =>
      @renderer.render @scene, @camera
      @scene.simulate undefined, 1
      requestAnimationFrame @animate


