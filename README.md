# RouteCrew Public

## How to start

1. Run `pnpm run setup:app` to set up app environment variables (creates a symlink from root `.env` to `apps/public-app/.env`)
2. Run `pnpm run setup:server` to set up server environment (runs prisma generate and migrations)
3. Run `pnpm run start` on root directory to start in metro
4. Run `pnpm run web` on root directory to start in web

## Rules

### Frontend (App)

`/apps/public-app`

1. All the UI code should be written in `/packages/ui`
2. Use `svg-to-react.sh` script in `/packages/ui/scripts` to convert svg into icon elements. Keep svg file in the scripts directory and call script, Name the icon with suffix "Icon".

### Backend

`/apps/public-backend`

1. All backend related code should be written in `/packages/api`

### General

1. Do not directly or indirectly import @app/server in @app/ui
2. Always use "@app/" alias for importing any code
