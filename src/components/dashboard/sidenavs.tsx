import Link from 'next/link';
import { getWorkspace } from '@/lib/data';
import BoardsIcon from '../icons/boards';
import ArrowDownIcon from '../icons/arrow-down';
import WorkspaceLogo from '../ui/workspace-logo';
import { WorkspaceLinks, BoardsLinks } from './nav-links';

export function MainSideNav() {
  return (
    <nav
      className={`
        w-[260px] 
        border-r 
        border-r-white 
        border-opacity-30 
        bg-sidenav-background 
        text-white
      `}>
      <Link href="/workspaces">
        <div className="mt-4 bg-button-selected-background py-2">
          <span className="flex items-center gap-3 px-4">
            <BoardsIcon height="16px" /> Workspaces
          </span>
        </div>
      </Link>
    </nav>
  );
}

export async function WorkspaceSideNav({
  boardId,
  workspaceId,
  actualPageName,
}: {
  boardId?: string;
  workspaceId?: string;
  actualPageName?: string;
}) {
  const workspace = await getWorkspace({ workspaceId, boardId });

  return (
    <nav
      className={`
      w-[260px] 
      border-r 
      border-r-white 
      border-opacity-30 
      bg-sidenav-background 
      text-white
    `}>
      <div className="border-b border-b-white border-opacity-20 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <WorkspaceLogo workspaceName={workspace.name} />
            <h2 className="pr-4 text-sm font-bold">{workspace.name}</h2>
          </div>
          <div
            className={`
                  rotate-90 
                  cursor-pointer 
                  rounded 
                  bg-white 
                  bg-opacity-10 
                  p-1.5 
                  hover:bg-opacity-20
                `}>
            <ArrowDownIcon height="15px" />
          </div>
        </div>
      </div>
      <div className="text-sm">
        <WorkspaceLinks workspace={workspace} actualPageName={actualPageName} />
        <h3 className="mb-3 mt-4 px-4 font-bold">Your boards</h3>
        <BoardsLinks boards={workspace.boards} selectedBoardId={boardId} />
      </div>
    </nav>
  );
}
