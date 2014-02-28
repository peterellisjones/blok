require
  baseUrl: 'js'
  ['scene'],
  (Scene) ->
    Physijs.scripts.worker = 'js/vendor/physijs_worker.js'
    s = new Scene(THREE)
    s.animate()
