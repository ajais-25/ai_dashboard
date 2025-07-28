import Link from "next/link";
import { ArrowLeft, TrendingUp, TrendingDown } from "lucide-react";

// MetricCard component
interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
  description: string;
  subtitle: string;
}

function MetricCard({
  title,
  value,
  change,
  changeType,
  description,
  subtitle,
}: MetricCardProps) {
  const isPositive = changeType === "positive";

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
      {/* Header with title and change indicator */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        <div
          className={`flex items-center gap-1 text-sm font-medium ${
            isPositive
              ? "text-green-600 dark:text-green-400"
              : "text-red-600 dark:text-red-400"
          }`}
        >
          {isPositive ? (
            <TrendingUp className="h-4 w-4" />
          ) : (
            <TrendingDown className="h-4 w-4" />
          )}
          <span>{change}</span>
        </div>
      </div>

      {/* Main value */}
      <div className="mb-3">
        <p className="text-3xl font-bold text-foreground">{value}</p>
      </div>

      {/* Description with trend icon */}
      <div className="flex items-center gap-2 mb-1">
        {isPositive ? (
          <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
        ) : (
          <TrendingDown className="h-4 w-4 text-red-600 dark:text-red-400" />
        )}
        <span className="text-sm font-medium text-foreground">
          {description}
        </span>
      </div>

      {/* Subtitle */}
      <p className="text-sm text-muted-foreground">{subtitle}</p>
    </div>
  );
}

// Individual metric card components
function TotalRevenueCard() {
  return (
    <MetricCard
      title="Total Revenue"
      value="$1,250.00"
      change="+12.5%"
      changeType="positive"
      description="Trending up this month"
      subtitle="Visitors for the last 6 months"
    />
  );
}

function NewCustomersCard() {
  return (
    <MetricCard
      title="New Customers"
      value="1,234"
      change="-20%"
      changeType="negative"
      description="Down 20% this period"
      subtitle="Acquisition needs attention"
    />
  );
}

function ActiveAccountsCard() {
  return (
    <MetricCard
      title="Active Accounts"
      value="45,678"
      change="+12.5%"
      changeType="positive"
      description="Strong user retention"
      subtitle="Engagement exceed targets"
    />
  );
}

function GrowthRateCard() {
  return (
    <MetricCard
      title="Growth Rate"
      value="4.5%"
      change="+4.5%"
      changeType="positive"
      description="Steady performance increase"
      subtitle="Meets growth projections"
    />
  );
}

// Dashboard Navigation component
function DashboardNav() {
  return (
    <nav className="mb-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>
    </nav>
  );
}

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
