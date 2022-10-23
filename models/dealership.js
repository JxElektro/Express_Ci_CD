//this is a postgres database


// import sequelize
import Sequelize from 'sequelize';

// import database connection
import db from '../config/database.js';

// init datatypes
const { DataTypes } = Sequelize;



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
  createdat: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
  updatedat: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  }
},{ tableName: 'dealership' 
});


export default Dealership;
