define ['cube'], (Cube) ->
  class Scene

    constructor: () ->

      @camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        1,
        10000
      )
      @camera.position.z = 1000
      @camera.position.y = 0
      @camera.lookAt new THREE.Vector3(0, 0, 0)

      @scene = new THREE.Scene()

      # add cubes
      @cubes = []

      for z in [0...3]
        for x in [0...10]
          for y in [0...10]
            cube = new Cube()
            #shift.setPosition new THREE.Vector3( , 0, z * 200 - 1000 )
            cube.mesh.position.x = x * 210 - 1000
            cube.mesh.position.y = y * 210 - 1000
            cube.mesh.position.z = z * 210 - 1000
            @cubes.push cube
            @scene.add cube.mesh

      # add directional light
      @dirLight = new THREE.DirectionalLight(0xffffff, 1.0)
      @dirLight.position.set 1, 1, 1
      @dirLight.shadowCameraVisible = true
      @scene.add @dirLight

      @renderer = new THREE.CanvasRenderer()
      @renderer.setSize window.innerWidth, window.innerHeight

      document.body.appendChild @renderer.domElement

    animate: =>
      requestAnimationFrame @animate
      cube.animate() for cube in @cubes

      @renderer.render @scene, @camera


