import { WorkspaceSideNav } from '@/components/dashboard/workspace-sidenav';

export default function SpecificBoardLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { id: string };
}>) {
  return (
    <>
      <WorkspaceSideNav boardId={params.id} />

      <main className="grow bg-main-background pl-8 pt-6 text-white">{children}</main>
    </>
  );
}
