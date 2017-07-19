import 'jquery-circle-progress';

export default function taskProgress() {
  return {
    restrict: 'A',
    scope: {
      progress: '<',
    },
    link(scope, el, attrs) {
      let { animation, fill } = attrs;
      const opts = {};
      if (typeof animation !== 'undefined') {
        animation = JSON.parse(animation);
        opts.animation = animation;
      }

      if (typeof fill !== 'undefined') {
        try {
          fill = JSON.parse(fill);
        } catch (e) {
        } finally {
          opts.fill = fill;
        }
      }

      scope.$watch('progress', (curr, prev) => {
        const config = angular.merge({}, attrs, opts, {
          value: scope.progress,
          animationStartValue: prev,
        });
        el.circleProgress(config);
      });
    },
  };
}
