(function() {
  require({
    baseUrl: 'js',
    shim: {
      'vendor/three': {
        exports: 'THREE'
      }
    }
  }, ['vendor/three', 'scene'], function(THREE, Scene) {
    var s;
    s = new Scene(THREE);
    return s.animate();
  });

}).call(this);

//# sourceMappingURL=main.js.map
