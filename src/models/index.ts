import { INTEGER } from "sequelize";
import { Sequelize, DataTypes, Model } from "sequelize";
const dbConfig = {
  host: "localhost",
  username: "blazeanmol",
  password: "Rubi@123",
  database: "university",
};

export const sequelize = new Sequelize({
  ...dbConfig,
  dialect: "mysql",
  logging: true,
});

export class User extends Model {}

export function authenticate() {
  return sequelize.authenticate();
}
