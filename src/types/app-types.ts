import { Tables } from './database-types';

export type UserWorkspace = Workspace & Pick<Tables<'user_workspace'>, 'role'>;

export type Workspace = Tables<'workspace'> & {
  boards: Board[];
};

export type Board = Tables<'board'> & {
  task_lists?: TaskList[];
};

export type TaskList = Tables<'task_list'>;

export type Task = Tables<'task'>;

export type Comment = Tables<'comment'>;