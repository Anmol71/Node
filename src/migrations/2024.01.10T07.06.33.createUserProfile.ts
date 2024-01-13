import { DataTypes } from "sequelize";
import type { Migration } from "../../umzug";

export const up: Migration = async ({ context: sequelize }) => {
  await sequelize.getQueryInterface().createTable("user_profile", {
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
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP()"),
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP()"),
      allowNull: false,
    },
  });
  await sequelize.getQueryInterface().addConstraint( "user_profile",{
    fields:['user_id'],
    type: 'foreign key',
    name: 'users_user_profile_fkey',
    references:{
        table:'users',
        field: 'id'
    },
    onDelete: 'cascade',
    onUpdate: 'cascade'

  })
};

export const down: Migration = async ({ context: sequelize }) => {
  await sequelize.getQueryInterface().dropTable("users");
};
