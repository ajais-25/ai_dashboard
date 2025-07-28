import MetricCard from "./metric-card";

export default function ActiveAccountsCard() {
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
