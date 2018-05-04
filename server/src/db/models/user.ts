import { Document, Schema, Model, model } from "mongoose";
import uuid from "uuid/v4";

export interface IUserSchema extends Document {
  _id: string;
  name: string;
}

export const UserSchema = new Schema({
  _id: { type: String, default: uuid },
  name: { type: String, required: true },
});


export interface IUser extends IUserSchema {}

export interface IUserModel extends  Model<IUser> {
}

export const User = model<IUser>("user", UserSchema);

export default User;
