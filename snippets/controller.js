angular.module('app', [])
  .controller('AppController', PageController);


class PageController {

  constructor() {
    this.title = "Expose Me On The View!";
  }

}
