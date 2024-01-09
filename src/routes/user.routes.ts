import { Router, Request, Response } from "express";
import {
  readData,
  readSpecificData,
  insertRecord,
  insertMultipleRecords,
  updateRecord,
  deleteRecord,
  deleteAllRecord,
} from "../controller/userController";
import { NUMBER } from "sequelize";

export const router = Router();

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
  const email = req.body.email;
  const password = req.body.password;
  const address = req.body.address;
  console.log(req.body);
  console.log("name", name);
  const data = await insertRecord({ name, age, email, password, address });
  // const multipleData = await insertMultipleRecords(users)
  res.send(data);
});

router.put("/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const name = req.body.name;
  const age = req.body.age;
  const email = req.body.email;
  const password = req.body.password;
  const address = req.body.address;
  console.log(req.body);
  console.log(id + "ID");
  const data = await updateRecord({ name, email, password, address, age }, id);
  res.send(data);
});

router.delete("/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const del = await deleteRecord(id);
  res.send("Deleted Succesfully!" + del);
});

router.delete("", async (req: Request, res: Response) => {
  const del = await deleteAllRecord();
  res.send("All the data in database has been removed" + del);
});
