import Link from 'next/link';
import ArrowDownIcon from './icons/arrow-down';
import BoardsIcon from './icons/boards';
import StarIcon from './icons/star';
import UserIcon from './icons/user';
import WorkspaceLogo from './ui/workspace-logo';

export default function SideNav() {
  return (
    <nav className="w-[260px] border-r border-r-white border-opacity-30 bg-sidenav-background text-white">
      <div className="border-b border-b-white border-opacity-20 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <WorkspaceLogo />
            <h2 className="pr-4 text-sm font-bold">Mario workspace</h2>
          </div>
          <div className="rotate-90 cursor-pointer rounded bg-white bg-opacity-10 p-1.5 hover:bg-opacity-20">
            <ArrowDownIcon height="15px" />
          </div>
        </div>
      </div>
      <div className="text-sm">
        <ul className="pt-4">
          <li>
            <Link href="/dashboard/boards">
              <div className="py-2 hover:bg-button-hovered-background">
                <span className="flex items-center gap-3 px-4">
                  <BoardsIcon height="16px" /> Boards
                </span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/members">
              <div className="py-2 hover:bg-button-hovered-background">
                <span className="flex items-center gap-3 px-4">
                  <UserIcon height="16px" /> Members
                </span>
              </div>
            </Link>
          </li>
        </ul>
        <h3 className="mb-3 mt-4 px-4 font-bold">Your boards</h3>
        <ul>
          <li>
            <Link href="/dashboard/boards/1">
              <div className="py-2 hover:bg-button-hovered-background">
                <span className="flex items-center justify-between gap-3 px-4">
                  Board 1 <StarIcon height="18px" />
                </span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/boards/2">
              <div className="py-2 hover:bg-button-hovered-background">
                <span className="flex items-center justify-between gap-3 px-4">
                  Board 2 <StarIcon height="18px" />
                </span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
