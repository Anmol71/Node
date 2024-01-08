import { Sequelize, DataTypes, Model } from "sequelize";
const dbConfig = {
  host: "localhost",
  username: "blazeanmol",
  password: "Rubi@123",
  database: "university",
};

const sequelize = new Sequelize({ ...dbConfig, dialect: "mysql" });

// const User = sequelize.define(
//   "students", {
//   name: { type: DataTypes.STRING },
//   age: { type: DataTypes.INTEGER }

// },
//   {
//     freezeTableName: true,
//   }
// );

export class User extends Model {}

User.init(
  {
    name: { type: DataTypes.STRING },
    age: { type: DataTypes.INTEGER },
  },
  {
    sequelize,
    modelName: "users",
  }
);

const user = new User();
// user.id; //

sequelize
  .authenticate()
  .then(() => console.log("Connection successfull!"))
  .catch((err) => console.log(err));

export async function readData() {
  try {
    const res = await User.findAll();
    console.log(res);
  } catch (error) {
    console.error("Failed to retrieve data : ", error);
  }
}
