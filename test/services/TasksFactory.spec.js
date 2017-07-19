import TasksService from '@/services/Tasks.factory';

describe('TasksService', () => {
  it('should return all tasks', () => {
    const tasksService = TasksService();
    expect(tasksService.fetchTasks).toBeDefined();

    const tasks = tasksService.fetchTasks();
    expect(tasks.length).toBe(10);
  });

  it('should return 6 tasks', () => {
    const tasksService = TasksService();
    expect(tasksService.fetchRandomTasks).toBeDefined();

    const tasks = tasksService.fetchRandomTasks();
    expect(tasks.length).toBe(6);
  });

  it('should return 6 random tasks', () => {
    const tasksService = TasksService();
    expect(tasksService.fetchRandomTasks).toBeDefined();

    const firstSet = tasksService.fetchRandomTasks();
    const secondSet = tasksService.fetchRandomTasks();
    expect(firstSet).not.toEqual(secondSet);
  });
});
