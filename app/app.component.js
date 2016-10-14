(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app', // css selector for where to create the component
      template: '<h1>My Angular App</h1>'
    })
    .Class({
      constructor: function(){}
    });
})(window.app || (window.app = {}));