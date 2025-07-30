import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-blue-50/30 dark:to-blue-950/20">
      {/* Navigation */}
      <nav className="w-full px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">AD</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">B</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-foreground leading-tight">
                  ADmyBRAND
                </span>
                <span className="text-xs text-blue-600 font-semibold -mt-1">
                  Insights
                </span>
              </div>
            </div>
          </div>
          <Link
            href="/dashboard"
            className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
          >
            Dashboard
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            AI-Powered
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Analytics
            </span>
            <br />
            Dashboard
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your data into actionable insights with our intelligent
            analytics platform. Monitor key metrics, track performance, and make
            data-driven decisions with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/dashboard"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View Dashboard
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800/50 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Real-time Analytics
            </h3>
            <p className="text-muted-foreground">
              Monitor your business metrics in real-time with interactive charts
              and visualizations.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800/50 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              AI Insights
            </h3>
            <p className="text-muted-foreground">
              Leverage artificial intelligence to discover patterns and predict
              trends in your data.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800/50 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Secure & Reliable
            </h3>
            <p className="text-muted-foreground">
              Enterprise-grade security with 99.9% uptime guarantee for your
              critical business data.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500K+</div>
              <div className="text-sm text-muted-foreground">
                Data Points Analyzed
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                99.9%
              </div>
              <div className="text-sm text-muted-foreground">
                Uptime Guarantee
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">
                Real-time Monitoring
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                10ms
              </div>
              <div className="text-sm text-muted-foreground">
                Average Response Time
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-md flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-xs">AD</span>
                  </div>
                  <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs leading-none">
                      B
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-bold text-foreground leading-tight">
                    ADmyBRAND
                  </span>
                  <span className="text-xs text-blue-600 font-semibold -mt-0.5">
                    Insights
                  </span>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 ADmyBRAND Insights. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
