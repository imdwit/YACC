import './mainApp.css';

const template = `
  <div class="main">
    <p class="main__title">Tasks for today:</p>
    <div class="tasks">
      <div
        class="tasks__task"
        ng-repeat="task in $ctrl.tasks track by $index"
        >
          <p
            class="task__task"
            ng-class="task.completed ? 'task__task--completed': ''"
            ng-click="$ctrl.toggleComplete($index)"
            >
              {{task.task}}
          </p>
      </div>
    </div>
  </div>
`;

const mainApp = {
  controller: MainAppCtrl,
  template,
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
