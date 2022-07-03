import taskType from '../../../src/types/types/Task';

export const taskMock: taskType[] = [
  {
    id: 1,
    task: 'Wake up',
    taskStatus: 'finished',
  },
  {
    id: 2,
    task: 'Brush teeth',
    taskStatus: 'ongoing',
  }
];

export const singleTaskMock: taskType = {
  id: 1,
  task: 'Sleep',
  taskStatus: 'ongoing',
};
