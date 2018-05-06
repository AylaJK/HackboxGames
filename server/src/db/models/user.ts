import { Document, Schema, Model, model } from "mongoose";
import uuid from "uuid/v4";

export interface IUserSchema extends Document {
  name: string;
}

export const UserSchema = new Schema({
  name: { type: String, required: true },
});


export interface IUser extends IUserSchema {}

export interface IUserModel extends Model<IUser> {
}

export const User: IUserModel = model<IUser>("user", UserSchema);

export default User;
