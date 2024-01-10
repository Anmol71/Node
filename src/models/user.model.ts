// import { User } from "./index";
import { DataTypes, Model } from "sequelize";
import { sequelize } from "./index";
import{ useBcrypt} from 'sequelize-bcrypt';
export class User extends Model {}
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    // age: { type: DataTypes.INTEGER, allowNull: false },
    // address: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize,
    tableName: "users",
  }
);
useBcrypt(User,{})
// User.UserProfile=User.hasOne(User)
