import angular from 'angular';
import TasksService from './Tasks.factory';

const servicesModule = angular.module('services', []);

servicesModule.factory('TasksService', TasksService);

export default servicesModule;