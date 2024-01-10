// import { User } from "./index";
import { DataTypes, Model } from "sequelize";
import { sequelize } from "./index";
import { User } from "./user.model";
export class UserProfile extends Model {}

UserProfile.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    phone_no: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "user_profile",
  }
);
