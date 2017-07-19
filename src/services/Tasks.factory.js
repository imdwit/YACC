import sampleSize from 'lodash.samplesize';
function TasksService() {

  const tasks = [
    'build homework assignment',
    'fix car',
    'fix other car',
    '???',
    'profit',
    'quit job',
    'find new job',
    'buy new car',
    'eat lunch',
    'drink a beer',
  ];


  return {
    fetchTasks() {
      return tasks;
    },
    fetchRandomTasks() {
      return sampleSize(tasks, 6);
    }
  };
}

export default TasksService;