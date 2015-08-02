// module declaration
angular.module('lifecycle', []);

// module configuration
function moduleConfiguration() {
  console.log('lifecycle module: module configuration');
}

function moduleRunFunction () {
  console.log('lifecycle module: module run phase');
}

// angular components
class ViewController {

  constructor() {
    console.log('lifecycle module: controller has been initialize');
  }

}

class Utility {

  constructor() {
    console.log('lifecycle module: Utility has been initialize');
  }

}

// register against the module
export default angular.module('lifecycle')

  .config(moduleConfiguration)
  .run(moduleRunFunction)

  .controller('viewController', ViewController)
  .service('utility', Utility)
