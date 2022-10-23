// import sequelize and the database connection
import sequelize from "sequelize";
import db from "../config/database.js";

// init datatypes
const { DataTypes } = sequelize;

//define schema for the model with a automatic id
const Car = db.define(
//define atrributes
  "car",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    make: {
      type: DataTypes.STRING
    },
    model: {
      type: DataTypes.STRING
    },
    year: {
      type: DataTypes.INTEGER
    },
    price: {
      type: DataTypes.INTEGER
    },
    dealershipid: {
      type: DataTypes.INTEGER,
      references : {
        model: 'dealership',
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
  { tableName: "car" }
);

export default Car;
  

