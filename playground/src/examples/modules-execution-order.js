// module dependencies execution order example
angular.module('a', [])
  .config( () => console.log('module a config') )
  .run( () => console.log('module a run') );

angular.module('b', [])
  .config( () => console.log('module b config') )
  .run( () => console.log('module b run') );

angular.module('c', [])
  .config( () => console.log('module c config') )
  .run( () => console.log('module c run') );


export default angular.module('runner', ['a','c','b'])
  .config( () => console.log('module main config') )
  .run( () => console.log('module main run') );
