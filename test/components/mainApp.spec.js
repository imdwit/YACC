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
});
