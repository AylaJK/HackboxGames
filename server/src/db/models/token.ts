import { Document, Schema, Model, model } from "mongoose";
import { User, IUser } from "./user";
import moment from "moment";
import crypto from "crypto";

export interface ITokenSchema extends Document {
  id: string;
  user_id: Schema.Types.ObjectId;
  expires?: string;
  hasExpired(): boolean;
};

export const TokenSchema = new Schema({
  id: { type: String, required: true, unique: true },
  user_id: { type: Schema.Types.ObjectId, required: true },
  expires: String,
});

TokenSchema.pre('init', true, function(next, done) {
  next(); // Allow next parallel middleware to run at this point
  // TODO recursive calcuate
  // TODO confirm it will be unqiue / does not yet exist
  this.id = crypto.randomBytes(180).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
  done();
});

TokenSchema.methods.hasExpired = function() {
  if (!this.expires) return false;
  return moment().utc().diff(moment(this.expires)) < 0;
};


export interface IToken extends ITokenSchema {};

export interface ITokenModel extends Model<IToken> {
  viewToken(id: string): Promise<IUser>;
  consumeToken(id: string): Promise<IUser>;
};

TokenSchema.statics.viewToken = function(id: string) {
  return new Promise(async (resolve, reject) => {
    try {
      const token = await this.findOne({ id }).exec();
      if (!token) return reject(new Error ('Token not found'));
      const user = await User.findById(token.user_id).exec();
      resolve(user);
    } catch (err) {
      reject(err);
    }
  });
}

TokenSchema.statics.consumeToken = function(id: string) {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await this.viewToken(id);
      await this.findOne({ id }).remove().exec();
      resolve(user);
    } catch (err) {
      reject(err)
    }
  });
};

export const Token: ITokenModel = <ITokenModel>model<IToken>("token", TokenSchema);

export default Token;
