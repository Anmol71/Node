import { where } from "sequelize";
import { User } from "../models";
export async function readData() {
  try {
    return User.findAll();
  } catch (error) {
    console.error("Failed to retrieve data : ", error);
  }
}
interface IUser {
  name: string;
  email: string;
  password: number;
  age: number;
  address: string;
}
export async function readSpecificData(id: number) {
  try {
    return User.findOne({
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.log("Error:", error);
  }
}

export async function insertRecord(user: IUser) {
  console.log(user);
  try {
    return User.build()
      .set({ ...user })
      .save();
  } catch (err) {
    console.log("Unable to create records");
  }
}

export async function insertMultipleRecords(users: IUser[]) {
  try {
    // return User.bulkBuild(users);
  } catch (error) {
    console.log("Failed to insert multiple records");
  }
}

export async function updateRecord(users: IUser, id: number) {
  try {
    return User.update({ ...users }, { where: { id: id } });
  } catch (error) {
    console.log("Failed to update record!" + error);
  }
}

export async function updateMultipleRecords() {}

export async function deleteRecord(id: number) {
  try {
    return User.destroy({ where: { id: id } });
  } catch (error) {
    console.log(`Failed to delete record with ${id} id`);
  }
}

export async function deleteAllRecord() {
  try {
    return User.truncate();
  } catch (error) {
    console.log("Failed to delete records.");
  }
}
