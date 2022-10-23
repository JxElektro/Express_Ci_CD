import { Sequelize } from "sequelize";
import db from "../config/database.js";

// init datatypes

const { DataTypes } = Sequelize;


// init user model
const User = db.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    createOn: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
      field: "create_on",
    }
  },
  {
    timestamps: false,
  }
);

export default User;