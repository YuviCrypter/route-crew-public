# RouteCrew Public

## How to start
1. Run `pnpm run start` on root directory to start in metro
2. Run `pnpm run web` on root directory to start in web

## Rules

### Frontend (App)
`/apps/public-app`

1. All the UI code should be written in `/packages/ui` 

### Backend
`/apps/public-backend`

1. All backend related code should be written in `/packages/api`

### General
1. Do not directly or indirectly import @app/server in @app/ui
2. Always use "@app/" alias for importing any code