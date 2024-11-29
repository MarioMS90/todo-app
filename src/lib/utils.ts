import { Board } from '@/types/app-types';
import { fetchWorkspaces } from './data';

export async function getWorkspaceIdFromBoard(boardId: string): Promise<string | undefined> {
  const workspaces = await fetchWorkspaces();
  const boards = workspaces.flatMap(workspace => workspace.boards);
  const board = boards.find(_board => _board.id === boardId);

  return board?.workspace_id;
}

export async function getStarredBoards(): Promise<Board[]> {
  const workspaces = await fetchWorkspaces();

  return workspaces.flatMap(workspace =>
    workspace.boards
      .filter(board => board.starred)
      .map(board => ({ ...board, workspaceName: workspace.name })),
  );
}
