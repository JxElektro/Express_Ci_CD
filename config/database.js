import { Sequelize } from 'sequelize';

// Create a Connection to the Database

const db = new Sequelize('postgres', 'postgres', 'alcap1990', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
  logging: false,
  define: {
    timestamps: false
  }
});

export default db;
