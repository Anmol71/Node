import { Router, Request, Response } from "express";
import { readData } from "../models/index";

export const router = Router();

export interface User {
  id: number;
  name: string;
  age: number;
}
const users: User[] = [];

router.get("", async (req: Request, res: Response) => {
  const data = await readData();  
  // console.log(req.body);
  res.send("Hello ");
 res.json(data)
 console.log("Data"+data)
  
});

router.get("/:id", (req, res) => {
  const userID = parseInt(req.params.id);
  const user = users.find((user: User) => user.id === userID);
  console.log(userID, user, users);
  res.json(user);
});

router.post("", (req: Request, res: Response) => {
  const userData = req.body;
  users.push(...userData);
  users.push(userData[1]);
  console.log(userData[1]);

  res.send(users);
});

router.put("", (req: Request, res: Response) => {
  res.send("Hello updating");
});

router.delete("", (req: Request, res: Response) => {
  res.send("Deleting");
});
