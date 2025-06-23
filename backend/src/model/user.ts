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
    require: true,
  },
});

export const User = model("User", UserSchema);
