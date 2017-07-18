import TasksService from '@/services/Tasks.factory';

describe('TasksService', () => {
  it('should hello world', () => {
    const x = TasksService();
    expect(true).toBe(true);
  });
});
