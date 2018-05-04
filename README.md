# Hackbox Games

Welcome to the new Hackbox Games repository.

Installing:
-----------
- clone git repository
- at project root, run `npm install`
- configure the [server environment](server/ENVIRONMENT.md)


Commands:
---------
- `npm run dev` starts both react (`/client`) and hackboxgames(`/server`) HMR servers
  - use `npm run dev:client` and `npm run dev:server` to run individually
- `npm run build` compiles static versions of client and server
  - use `npm run build:client` and `npm run build:server` to run individually
- `npm run serve` starts the hackboxgames server (which must already be built)
- `npm start` builds and serves

