const mainApp = {
  controller: MainAppCtrl,
};

function MainAppCtrl(TasksService) {
  this.$onInit = () => {
    this.tasks = TasksService.fetchRandomTasks();
  };
  
  this.toggleComplete = ($index) => {
    this.tasks[$index].completed = !this.tasks[$index].completed;
  };
}

MainAppCtrl.$inject = ['TasksService'];

export default mainApp;
