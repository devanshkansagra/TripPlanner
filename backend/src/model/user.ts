import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  fullname: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: false,
  },
  authProvider: {
    type: String,
    require: false,
  },
  accessToken: {
    type: String,
    require: false,
  },
  refreshToken: {
    type: String,
    require: false,
  },
});

export const User = model("User", UserSchema);
