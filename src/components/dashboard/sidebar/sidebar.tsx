'use client';

import Link from 'next/link';
import BoardsIcon from '@/components/icons/boards';
import ArrowDownIcon from '@/components/icons/arrow-down';
import WorkspaceLogo from '@/components/ui/workspace-logo';
import PlusIcon from '@/components/icons/plus';
import { CreateBoardPopover } from '@/components/dashboard/popovers';
import { SidebarLinks } from '@/components/dashboard/sidebar/sidebar-links';
import { SidebarBoards } from '@/components/dashboard/sidebar/sidebar-boards';
import { useState } from 'react';
import { UserWorkspace } from '@/types/app-types';
import { cn } from '@/lib/utils';

export function MainSidebar() {
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
            <BoardsIcon height={16} /> Workspaces
          </span>
        </div>
      </Link>
    </nav>
  );
}

export function WorkspaceSidebar({
  workspace,
  boardId,
}: {
  workspace: UserWorkspace;
  boardId?: string;
}) {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  return (
    <nav
      className={cn(
        'relative w-[260px] border-r border-r-white border-opacity-30 bg-sidenav-background text-white',
        {
          'w-6': !sidebarExpanded,
        },
      )}>
      <div
        className={cn(
          'absolute bottom-0 left-0 top-0 w-[260px] bg-sidenav-background transition-transform',
          {
            '-translate-x-full': !sidebarExpanded,
          },
        )}>
        <div className="border-b border-b-white border-opacity-20 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <WorkspaceLogo workspaceName={workspace.name} />
              <h2 className="pr-4 text-sm font-bold">{workspace.name}</h2>
            </div>
            <button
              className={cn('cursor-pointer p-1.5', {
                'rotate-90 rounded p-1.5 hover:bg-white/20': sidebarExpanded,
                'translate-x-12 -rotate-90 rounded-full bg-sidenav-background p-1 hover:opacity-90':
                  !sidebarExpanded,
              })}
              type="button"
              onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <ArrowDownIcon height={15} />
            </button>
          </div>
        </div>
        <div className="text-sm">
          <SidebarLinks workspace={workspace} />
          <div className="flex items-center justify-between pl-4 pr-2.5">
            <h3 className="mb-3 mt-4 font-bold">Your boards</h3>
            <CreateBoardPopover
              workspaceId={workspace.id}
              triggerClassName="[&]:px-1.5"
              buttonText={<PlusIcon height={16} />}
            />
          </div>
          <SidebarBoards boards={workspace.boards} boardId={boardId} />
        </div>
      </div>
    </nav>
  );
}
