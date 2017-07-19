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
  ].map(task => ({ task, completed: false }));
  // i didnt want to write "completed: false 10 times :)"

  return {
    fetchTasks() {
      return tasks;
    },
    fetchRandomTasks() {
      // https://lodash.com/docs/4.17.4#sampleSize
      // "Gets n random elements at unique keys from collection up to the size of collection."
      return sampleSize(tasks, 6);
    },
  };
}

export default TasksService;
