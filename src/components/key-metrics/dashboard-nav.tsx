import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ThemeToggle } from "../theme-toggle";

export default function DashboardNav() {
  return (
    <nav className="mb-8 flex items-center justify-between">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>
      <ThemeToggle />
    </nav>
  );
}
