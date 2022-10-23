// Import express
import express from "express"; 
// Import cors
import cors from "cors";
// Import connection
import db from "./config/database.js";
// Import router
import Router from "./routes/routes.js";

// Import auth router
//import authRouter from "./routes/auth.js";
// Init express
const app = express(); 
// use express json
app.use(express.json());

// var corsOptions = {
//   origin: 'http://example.com',
// }

app.use(cors());

//Testing database connection 
try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
}


// use router integra todo los controllers enpoints
app.use(Router);

//app.use(authRouter);

app.listen(3001, () => console.log('Servidor corriendo en localhost:3001...'))

