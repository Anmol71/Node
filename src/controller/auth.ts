import { Request, Response } from "express";
import { User } from "../models/user.model";

export async function Register(req: Request, res: Response) {
  // get required variables from request body
  // using es6 object destructing
  const { name, email, password } = req.body;
  try {
    // create an instance of a user
    const newUser = new User({
      name,
      email,
      password,
    });
    // Check if user already exists
    const existingUser = await User.findOne({
      where: { email },
    });
    if (existingUser)
      return res.status(400).json({
        status: "failed",
        data: [],
        message: "It seems you already have an account, please log in instead.",
      });
    const savedUser = await newUser.save(); // save new user into the database
    // const { role, ...user_data } = savedUser;
    res.status(200).json({
      status: "success",
      //   data: [user_data],
      message:
        "Thank you for registering with us. Your account has been successfully created.",
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      code: 500,
      data: [],
      message: "Internal Server Error",
    });
  }
  res.end();
}
export async function Login(req: Request, res: Response) {
  // Get variables for the login process
  const { email } = req.body;
  try {
    // Check if user exists
    const user = await User.findOne({ where: { email } }).("+password");
    if (!user)
      return res.status(401).json({
        status: "failed",
        data: [],
        message:
          "Invalid email or password. Please try again with the correct credentials.",
      });
    // if user exists
    // validate password
    const isPasswordValid = `${req.body.password}` == user.password;
    // if not valid, return unathorized response
    if (!isPasswordValid)
      return res.status(401).json({
        status: "failed",
        data: [],
        message:
          "Invalid email or password. Please try again with the correct credentials.",
      });
    // return user info except password
    const { password, ...user_data } = user._doc;

    res.status(200).json({
      status: "success",
      data: [user_data],
      message: "You have successfully logged in.",
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      code: 500,
      data: [],
      message: "Internal Server Error",
    });
  }
  res.end();
}
