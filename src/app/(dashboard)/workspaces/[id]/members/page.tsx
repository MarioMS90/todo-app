import { getWorkspace } from '@/lib/data';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Members',
};

export default async function MembersPage({ params }: { params: { id: string } }) {
  const workspace = await getWorkspace({ workspaceId: params.id });

  if (!workspace) {
    notFound();
  }

  return 'Members page, coming soon! 🚀';
}
