import MetricCard from "./metric-card";

export default function NewCustomersCard() {
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
