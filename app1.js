import express from "express"; 
import cors from "cors";
import db from "./config/database.js";
import Router from "./routes/routes.js";
import authRouter from "./routes/auth.js";
import * as dotenv from "dotenv"

// Init express
const app = express(); 

// Init middleware
console.log(process.env.ENV); 

// use express json
app.use(express.json());

// use cors es el unico domino que puede acceder a la api
/*var corsOptions = { origin: "http://localhost:8080"};*/

app.use(cors());

// use router integra todo los controllers enpoints
app.use(Router);

// use auth router
app.use(authRouter);

try {
  await db.authenticate(); //nos permite saber si esa autenticada
  console.log('Connection has been established successfully.'); //aca valida que este funcionando (te deberia mostrar en consola que esta ok)
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default app;


