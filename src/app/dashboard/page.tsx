import DashboardNav from "@/components/key-metrics/dashboard-nav";
import TotalRevenueCard from "@/components/key-metrics/total-revenue-card";
import NewCustomersCard from "@/components/key-metrics/new-customers-card";
import ActiveAccountsCard from "@/components/key-metrics/active-accounts-card";
import GrowthRateCard from "@/components/key-metrics/growth-rate-card";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-7xl">
        <DashboardNav />
        <h1 className="text-3xl font-bold text-foreground mb-8">
          AI Dashboard
        </h1>

        {/* Metrics Header Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <TotalRevenueCard />
          <NewCustomersCard />
          <ActiveAccountsCard />
          <GrowthRateCard />
        </div>

        {/* Additional content can be added here */}
        <div className="text-center text-muted-foreground">
          <p>More dashboard content coming soon...</p>
        </div>
      </div>
    </div>
  );
}
