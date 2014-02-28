(function() {
  require({
    baseUrl: 'js'
  }, ['scene'], function(Scene) {
    var s;
    Physijs.scripts.worker = 'js/vendor/physijs_worker.js';
    s = new Scene(THREE);
    return s.animate();
  });

}).call(this);

//# sourceMappingURL=main.js.map
