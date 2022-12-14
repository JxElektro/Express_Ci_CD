//this is a postgres database


// import sequelize
import Sequelize from 'sequelize';

// import database connection
import db from '../config/database.js';

// init datatypes
const { DataTypes } = Sequelize;

//sync database
db.sync();

//define schema for the model with a automatic id
const Dealership = db.define('dealership', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  },
  address: {
    type: DataTypes.STRING
  },
  city: {
    type: DataTypes.STRING
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  }
},{ tableName: 'dealership' 
});


export default Dealership;
