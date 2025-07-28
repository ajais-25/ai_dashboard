import { TrendingUp, TrendingDown } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
  description: string;
  subtitle: string;
}

export default function MetricCard({
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
