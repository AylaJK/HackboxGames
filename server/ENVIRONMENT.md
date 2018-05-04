# Hackbox Games - Server - Environment

We use environment variables for configuration.

The server uses the `dotenv` package, so you can add a `.env` file in the server root (`server/`).
Alternatively you can choose to add these variables to your environment using your prefered method.


Production:
-----------

- `PORT`: the port for the server to listen on.


Database:
---------

- `DB_USER`: username
- `DB_PASS`: password
- `DB_PROTOCOL`: `mongodb` or `'mongodb+srv'` (note string escaping)
- `DB_HOST`: hostname
- `DB_PORT`: port (leave blank or ommit if using srv record)
- `DB_NAME`: schema name


Secrets:
--------

- `COOKIE_SECRET`: Secret for cookie parser
- `SESSION_SECRET`: Secret for express sesssion


OAuth:
------

- `DISCORD_CLIENTID`
- `DISCORD_CLIENTSECRET`
- `FACEBOOK_CLIENTID`
- `FACEBOOK_CLIENTSECRET`

