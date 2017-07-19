import '@/services/module';
import '@/components/module';

describe('MainApp', () => {
  beforeEach(angular.mock.module('services'));
  beforeEach(angular.mock.module('components'));

  var $componentController;
  beforeEach(
    inject(function(_$componentController_) {
      $componentController = _$componentController_;
    })
  );

  it('should bootstrap a list of tasks on init', () => {
    const $ctrl = $componentController('mainApp', null, null);
    $ctrl.$onInit();
    expect($ctrl.tasks.length).toBe(6);
  });

  it("should toggle a task's completed prop", () => {
    const $ctrl = $componentController('mainApp', null, null);
    $ctrl.$onInit();

    expect($ctrl.toggleComplete).toBeDefined();

    const $index = 3;
    $ctrl.toggleComplete($index);
    expect($ctrl.tasks[$index].completed).toBe(true);
    $ctrl.toggleComplete($index);
    expect($ctrl.tasks[$index].completed).toBe(false);
  });

  it('should calculate progress of completed tasks', () => {
    const locals = {};
    const $ctrl = $componentController('mainApp', locals, null);
    $ctrl.$onInit();
    expect($ctrl.progress).toBe(0);

    const $index = 3;
    locals.$scope.$digest();
    $ctrl.toggleComplete($index);
    locals.$scope.$digest();
    const progress = 1 / $ctrl.tasks.length;
    expect($ctrl.progress).toBe(progress);
  });
});
