import { INTEGER } from "sequelize";
import { Sequelize, DataTypes, Model } from "sequelize";
const dbConfig = {
  host: "localhost",
  username: "blazeanmol",
  password: "Rubi@123",
  database: "university",
};

const sequelize = new Sequelize({ ...dbConfig, dialect: "mysql" });

export class User extends Model {}

User.init(
  {
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    age: { type: DataTypes.INTEGER, allowNull: false },
    address: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    sequelize,
    modelName: "users",
  }
);

export function authenticate() {
  return sequelize.authenticate();
}
