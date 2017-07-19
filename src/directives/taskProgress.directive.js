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
        // animation is an object
        animation = JSON.parse(animation);
        opts.animation = animation;
      }

      if (typeof fill !== 'undefined') {
        try {
          // fill can be an object
          fill = JSON.parse(fill);
        } catch (e) {
        } finally {
          // shouldnt matter if its a string or an object
          opts.fill = fill;
        }
      }

      // watch our progress
      // anytime it updates animate the circle
      // starting from the previous value
      // to the new current value
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
