import express from "express"; 
import cors from "cors";
import db from "./config/database.js";
import Router from "./routes/routes.js";
import authRouter from "./routes/auth.js";

// Init express
const app = express(); 
// use express json
app.use(express.json());

// use cors es el unico domino que puede acceder a la api
/*var corsOptions = { origin: "http://localhost:8080"};*/

app.use(cors());

// use router integra todo los controllers enpoints
app.use(Router);

// use auth router
app.use(authRouter);


app.listen(3001, () => {
  console.log("Server running on port 3001");
});

// close nodemon
process.on("SIGINT", () => {
  db.close();
  process.exit();
});



export default app;


