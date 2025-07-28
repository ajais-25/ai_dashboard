import MetricCard from "./metric-card";

export default function GrowthRateCard() {
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
