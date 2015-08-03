// *****************************************
//  module declaration and referencing
// *****************************************
angular.module('app', []);

// referencing the module
angular.module('app');

// *****************************************
// module API for registering our code
// *****************************************
angular.module('app')
  .controller('name', function () {})
  .service('name', function () {})
  .factory('name', function () {})
  .provider('name', function () {})
  .directive('name', function () {})
  .filter('name', function () {});

// *****************************************
// module configuration and initialization
// *****************************************
angular.module('app')
  // optional configuration for the registered components
  .config(function () {})
  // this code will run after configuration
  // and before all other code
  .run(function () {});

// *****************************************
// module dependencies
// *****************************************
angular.module('app.utility', []);

// declaring a module with dependencies
angular.module('app', ['app.utility']);


// *****************************************
// bootstrap the module against the document
// *****************************************
angular.bootstrap(document, ['app']);




