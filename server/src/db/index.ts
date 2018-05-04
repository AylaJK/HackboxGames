import mongoose from "mongoose";

mongoose.connect(`${process.env.DB_PROTOCOL}://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}${process.env.DB_PORT ? ":" + process.env.DB_PORT : ""}/${process.env.DB_NAME || "test"}`);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "DB connection error:"));

db.once("open", function() {
  console.log("DB Connected");
});

export default db;

export { Auth, IAuth, IAuthModel } from "./models/auth";
export { User, IUser, IUserModel } from "./models/user";

