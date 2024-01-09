import { Router, Request, Response } from "express";
import {
  readData,
  readSpecificData,
  insertRecord,
  insertMultipleRecords,
  updateRecord,
} from "../controller/userController";
import { NUMBER } from "sequelize";

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
  const data = await readSpecificData(Number(req.params.id));
  res.send(data);
  console.log(req.params.id);
});

router.post("", async (req: Request, res: Response) => {
  const name = req.body.name;
  const age = req.body.age;
  console.log(req.body);
  const data = await insertRecord(name, age);
  const users = [{name: name, }]
  // const multipleData = await insertMultipleRecords(users)
  res.send(data);
  console.log("name" + name);
});

router.put("/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const name = req.body.name;
  const age = req.body.age;
  console.log(req.body);
  console.log(id+"ID")
  const data = await updateRecord(name, age, id);
  res.send(data);
});

router.delete("", (req: Request, res: Response) => {
  res.send("Deleting");
});
