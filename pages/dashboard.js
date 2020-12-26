import useSWR from "swr";
import { useAuth } from "@lib/auth";
import EmptyState from "@components/EmptyState";
import SitesTableSkeleton from "@components/SitesTableSkeleton";
import DashbpardShell from "@components/DashboardShell";
import fetcher from "@utils/fetcher";
import SitesTable from "@components/SiteTable";

export default function Dashboard() {
  const auth = useAuth();
  const { data } = useSWR("/api/sites", fetcher);

  if (!data) {
    return (
      <DashbpardShell>
        <SitesTableSkeleton />
      </DashbpardShell>
    );
  }

  const { sites } = data;

  return (
    <DashbpardShell>
      {sites.length ? <SitesTable sites={sites} /> : <EmptyState />}
    </DashbpardShell>
  );
}
