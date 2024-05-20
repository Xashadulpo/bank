// app/instrumentation.ts
import * as Sentry from "@sentry/nextjs";

export function register() {
  // Server and Edge configurations
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || "https://f64feb3994ab40f3c1fcae5d3de21f9f@o4507287910744064.ingest.us.sentry.io/4507287916052480",
    tracesSampleRate: 1.0,
    debug: false,
    // Uncomment and configure the following if you want to use Spotlight (https://spotlightjs.com)
    // spotlight: process.env.NODE_ENV === 'development',
  });

  // Additional client-specific configurations can be included here if needed
}
