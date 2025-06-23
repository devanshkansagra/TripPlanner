import { Request, Response } from "express";
import { User } from "../model/user";

export async function login(req: Request, res: Response) {
  const { username, password } = req.body;
  try {
    const response = await User.find({ username, password });
    if (response.length > 0) {
      res.status(200).send({ data: response[0] });
    }
    else {
      res.status(404).send({message: "No users found"});
    }
  } catch (error) {
    console.log(error);
  }
}

export async function signup(req: Request, res: Response) {
  const { fullname, email, username, password } = req.body;
  try {
    const doesExists = await User.findOne({ email });
    if (doesExists) {
      res.status(409).send({ message: "User already exists" });
    } else {
      const user = new User({ fullname, email, password, username });
      const response = await user.save();
      if (response) {
        res.status(201).send({ message: "New User Created" });
      }
    }
  } catch (error) {
    res.send(error);
  }
}
