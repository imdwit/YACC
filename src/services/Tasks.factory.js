function TasksService() {

  const tasks = [
    'build homework assignment',
    'fix car',
    'fix other car',
    '???',
    'profit',
  ];


  return {
    fetchTasks() {
      return tasks;
    },
  };
}

export default TasksService;