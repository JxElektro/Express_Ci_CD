// import sequelize and the database connection
import sequelize from "sequelize";
import db from "../config/database.js";

// init datatypes
const { DataTypes } = sequelize;

//define schema for the model with a automatic id
const Client = db.define(
//define atrributes
  "client",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    carid: {
      type: DataTypes.INTEGER,
      references : {
        model: 'car',
        key: 'id'
      }
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW
    }
  },
  { tableName: "client" }
);

export default Client;
  

