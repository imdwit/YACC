import angular from 'angular';
import mainApp from './mainApp.component';

const componentsModule = angular.module('components', []);
componentsModule.component('mainApp', mainApp);

export default componentsModule;