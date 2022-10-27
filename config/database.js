import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv';
dotenv.config();

const db = new Sequelize(
  process.env.DB_NAME || 'postgres',
  process.env.DB_USER || 'postgres',
  process.env.DB_PASSWORD || 'alcap1990',
  {
    host: process.env.DB_HOST|| 'localhost',
    port: process.env.DB_PORT|| 5432,
    dialect: "postgres",
    logging: false
  }
);

export default db;
