import useSWR from 'swr';
import EmptyState from '@components/EmptyState';
import SitesTableSkeleton from '@components/SitesTableSkeleton';
import DashbpardShell from '@components/DashboardShell';
import fetcher from '@utils/fetcher';
import SitesTable from '@components/SiteTable';
import { useAuth } from '@lib/auth';

export default function Dashboard() {
  const { user } = useAuth();
  const { data } = useSWR(user ? ['/api/sites', user.token] : null, fetcher);

  if (!data) {
    return (
      <DashbpardShell>
        <SitesTableSkeleton />
      </DashbpardShell>
    );
  }

  const { sites } = data;

  return (
    <DashbpardShell>{sites.length ? <SitesTable sites={sites} /> : <EmptyState />}</DashbpardShell>
  );
}
