import { Document, Schema, Model, model } from "mongoose";
import bcrypt from "../../bcrypt";

export interface ILocalSchema extends Document {
  username: string;
  password: string;
  email: string;
  validatePassword(password: string): Promise<boolean>;
  updatePassword(password: string): Promise<void>;
}

export const LocalSchema = new Schema({
  username: String,
  password: String,
  email: String,
});

LocalSchema.methods.validatePassword = function(password: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, this.password)
      .then(isMatch => resolve(isMatch))
      .catch(err => reject(err));
  });
};

LocalSchema.methods.updatePassword = function(password: string): Promise<void> {
  return new Promise (async (resolve, reject) => {
    try {
      const hash = await bcrypt.hash(password);
      await this.update({ password: hash });
    } catch (err) {
      return reject(err);
    }
    resolve();
  });
};


export interface IOAuthSchema extends Document {
  id: string;
  token: string;
  name: string;
  storeToken(token: string): Promise<void>;
}

export const OAuthSchema = new Schema({
  id: String,
  token: String,
  name: String,
});

OAuthSchema.methods.storeToken = function(token: string): Promise<void> {
  return new Promise (async (resolve, reject) => {
    try {
      const hash = await bcrypt.hash(token);
      await this.update({ token: hash });
    } catch (err) {
      return reject(err);
    }
    resolve();
  });
};

export interface IAuthSchema extends Document {
  user_id: string;
  local: ILocalSchema;
  discord: IOAuthSchema;
  facebook: IOAuthSchema;
}

export const AuthSchema = new Schema({
  user_id: Schema.Types.ObjectId,
  local: LocalSchema,
  discord: OAuthSchema,
  facebook: OAuthSchema,
});


export interface IAuth extends IAuthSchema {}

export interface IAuthModel extends Model<IAuth> {
}

export const Auth: IAuthModel = model<IAuth>("auth", AuthSchema);

export default Auth;

