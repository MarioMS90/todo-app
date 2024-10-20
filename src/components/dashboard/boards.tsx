import { Board } from '@/types/app-types';
import Link from 'next/link';
import { fetchWorkspaces, getWorkspace } from '@/lib/data';
import { notFound } from 'next/navigation';
import StarFillIcon from '../icons/star-fill';
import StarIcon from '../icons/star';
import { CreateBoardPopover } from './popovers';

export async function Boards({ workspaceId }: { workspaceId: string }) {
  const workspace = await getWorkspace({ workspaceId });

  if (!workspace) {
    notFound();
  }

  return (
    <BoardList
      boards={workspace.boards}
      extraItem={<CreateBoardPopover workspaceId={workspaceId} />}
    />
  );
}

export function BoardList({
  className,
  boards,
  extraItem,
}: {
  className?: string;
  boards: Board[];
  extraItem?: React.ReactNode;
}) {
  return (
    <ul className={`mt-4 flex flex-wrap gap-4 ${className}`}>
      {boards &&
        boards.map(({ id, name, starred }) => (
          <li key={id}>
            <Link href={`/boards/${id}`}>
              <div
                className={`
                  relative 
                  h-20 
                  w-44 
                  rounded
                  bg-white 
                  pl-4 
                  pt-2 
                  text-sm 
                  font-bold 
                  text-primary 
                  hover:opacity-95
                `}>
                {name}
                {starred ? (
                  <StarFillIcon
                    className="absolute bottom-2 right-3 text-yellow-400 hover:scale-125"
                    height="16px"
                  />
                ) : (
                  <StarIcon className="absolute bottom-2 right-3 hover:scale-125" height="16px" />
                )}
              </div>
            </Link>
          </li>
        ))}
      {extraItem && <li>{extraItem}</li>}
    </ul>
  );
}

export async function StarredBoards() {
  const workspaces = await fetchWorkspaces();

  const getStarredBoards = () =>
    workspaces.flatMap(workspace => workspace.boards.filter(board => board.starred));

  return <BoardList boards={getStarredBoards()} />;
}
