import MetricCard from "./metric-card";

export default function TotalRevenueCard() {
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
