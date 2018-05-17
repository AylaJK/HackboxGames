import expresssession from "express-session";
import cookieparser from "cookie-parser";

export const session = expresssession({
  secret: process.env.SESSION_SECRET,
  resave: false, // don't automatically write to session store
  saveUninitialized: false, // don't save new sessions
  cookie: {
    path: "/", // base URL path that will trigger client to send cookie
    httpOnly: true, // hide cookie from client-side JavaScript
    secure: false, // send cookie on non-secure connections
    maxAge: undefined, // non-persistent (persistent login handeled by passport)
  },
});

export const cookieParser = cookieparser(process.env.COOKIE_SECRET);

