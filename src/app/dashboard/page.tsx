"use client";

import DashboardNav from "@/components/key-metrics/dashboard-nav";
import TotalRevenueCard from "@/components/key-metrics/total-revenue-card";
import NewCustomersCard from "@/components/key-metrics/new-customers-card";
import ActiveAccountsCard from "@/components/key-metrics/active-accounts-card";
import GrowthRateCard from "@/components/key-metrics/growth-rate-card";
import SessionsChart from "@/components/charts/SessionsChart";
import PageViewsBarChart from "@/components/charts/PageViewsBarChart";
import CustomizedDataGrid from "@/components/CustomizedDataGrid";
import ChartUserByCountry from "@/components/charts/ChartUserByCountry";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-7xl">
        <DashboardNav />
        <h1 className="text-3xl font-bold text-foreground mb-8">Dashboard</h1>

        {/* Metrics Header Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <TotalRevenueCard />
          <NewCustomersCard />
          <ActiveAccountsCard />
          <GrowthRateCard />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <SessionsChart />
          <PageViewsBarChart />
        </div>

        {/* Data Grid and User Chart Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <div className="lg:col-span-3">
            <CustomizedDataGrid />
          </div>
          <div className="lg:col-span-1">
            <ChartUserByCountry />
          </div>
        </div>
      </div>
    </div>
  );
}
