import { Router, Request, Response } from "express";
import { readData, readSpecificData, insertRecord } from "../controller/userController";

export const router = Router();

export interface User {
  id: number;
  name: string;
  age: number;
}
router.get("", async (req: Request, res: Response) => {
  const data = await readData();
  // console.log(req.body);
  res.send(data);
  console.log("Data" + data);
});

router.get("/:id", async (req, res) => {
  const data = await readSpecificData(Number(req.params.id))
  res.send(data);
  console.log(req.params.id)
});

router.post("", async (req: Request, res: Response) => {
  const name = req.body.name;
  const age = req.body.age;
  console.log(req.body)
  const data = await insertRecord(name, age);
  res.send(data);
  console.log("name" + name);
});

router.put("", (req: Request, res: Response) => {
  res.send("Hello updating");
});

router.delete("", (req: Request, res: Response) => {
  res.send("Deleting");
});
