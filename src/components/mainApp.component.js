const mainApp = {
  controller: MainAppCtrl,
};

function MainAppCtrl(TasksService) {
  this.$onInit = () => {
    this.tasks = TasksService.fetchRandomTasks();
  };
}

MainAppCtrl.$inject = ['TasksService'];

export default mainApp;
