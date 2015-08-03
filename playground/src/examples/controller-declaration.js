function User () {

  this.getName = function () {
    return this.name;
  }
}

// simple controller
function TaskController(User) {

  this.tasks = [];
  this.task  = '';

  this.addTask = function () {
    this.tasks.push(this.task);
  };

  this.removeTask = function (task) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }
}

  angular.controller('TaskController', TaskController);
