require
  baseUrl: 'js',
  shim:
    'vendor/three':
      exports: 'THREE',
  ['vendor/three', 'scene'],
  (THREE, Scene) ->
    s = new Scene(THREE)
    s.animate()

