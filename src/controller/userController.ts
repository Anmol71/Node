import { User } from "../models";

export async function readData() {
    try {
      return User.findAll();
    } catch (error) {
      console.error("Failed to retrieve data : ", error);
    }
  }
  
  export async function readSpecificData(id:number){
  
    try {     
      return User.findOne(
          {
              where: {
                  id: id
              }
          }
      )
    } catch (error) {
      console.log("Error:",error)
    } 
  }
  
  export async function insertRecord(name: string, age: number) {
    try {
      return User.build({ name: name, age: age }).save();
    } catch (err) {
      console.log("Unable to create records");
    }
  }
  
  export async function insertMultipleRecords(users:[{}]){
    try{
      return User.bulkBuild(users)
    }
    catch (error) {
      console.log("Failed to insert multiple records")
    }
  }