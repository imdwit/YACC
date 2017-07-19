import jQuery from 'jquery';
import angular from 'angular';
import services from './services/module';
import components from './components/module';
import directives from './directives/module';

const requires = [
  services.name,
  components.name,
  directives.name,
];

const app = angular.module('app', requires);
