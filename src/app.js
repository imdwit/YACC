import angular from 'angular';
import services from './services/module';
import components from './components/module';

const requires = [
  services.name,
  components.name,
];

const app = angular.module('app', requires);
