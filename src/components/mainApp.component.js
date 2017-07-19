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
    <div class="progress">
      <div
        class="progress__circle"
        task-progress
        progress="$ctrl.progress"
        thickness="8"
        size="125"
        fill='{ "gradient": [["red", ".2"], ["green", ".3"], ["blue", ".8"]] }'
        xfill="purple"
        animation='{"duration": 750}'
        line-cap="round"
      >
      <p class="progress__value">{{$ctrl.progress * 100 | number : 0}}%</div>
    </div>
  </div>
`;

const mainApp = {
  controller: MainAppCtrl,
  template,
};

function MainAppCtrl(TasksService, $scope, $filter) {
  this.$onInit = () => {
    // receives 6 random tasks
    this.tasks = TasksService.fetchRandomTasks();
    // intializes our progress to 0;
    this.progress = 0;
  };

  this.toggleComplete = $index => {
    // toggles the completed value of a task at the index;
    this.tasks[$index].completed = !this.tasks[$index].completed;
  };

  /* 
    computes the progress of completed vs non-complete tasks
    by filtering completed tasks and counting how many there are
    and dividing it by the total number of tasks

     3 completed / 6 total = 50% complete
  */
  $scope.$watch(
    scope => $filter('filter')(this.tasks, { completed: true }).length,
    (curr, prev) => {
      // curr is the number of completed tasks
      if (curr !== prev) {
        this.progress = curr / this.tasks.length;
      }
    }
  );
}

MainAppCtrl.$inject = ['TasksService', '$scope', '$filter'];

export default mainApp;
