import { use } from 'react';
import { WorkspacePageNames } from '@/constants/constants';
import { WorkspaceSideNav } from '@/components/dashboard/sidenavs';

export default function WorkspaceSidenavPageBoardSidenavPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  return <WorkspaceSideNav workspaceId={id} actualPageName={WorkspacePageNames.MEMBERS} />;
}
