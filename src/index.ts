import { State, Task } from '@melonade/melonade-declaration';

export { Admin, IAdminConfig } from './admin';
export { ITaskResponse, IWorkerConfig, Worker } from './worker';

export const TaskStates = State.TaskStates;

export interface ITask extends Task.ITask {}
