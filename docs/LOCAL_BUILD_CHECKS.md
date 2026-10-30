# Local build validation — 2026-10-30

cd front
npm ci --ignore-scripts --legacy-peer-deps
npm run build

Java: Maven compile/test-compile with JDK 17. Supply WEEKLY_DB_PASSWORD externally for runtime. Application context/DB integration tests were not run.

Runtime DB settings require WEEKLY_DB_URL, WEEKLY_DB_USERNAME and WEEKLY_DB_PASSWORD. Frontend registration retains a domain allowlist configured by VITE_ALLOWED_EMAIL_DOMAIN, defaulting to the documentation domain example.com. Real authorization remains a server-side responsibility.
