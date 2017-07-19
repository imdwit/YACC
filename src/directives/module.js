import angular from 'angular';
import taskProgress from './taskProgress.directive';

const directivesModule = angular.module('directives', []);
directivesModule.directive('taskProgress', taskProgress);

export default directivesModule;