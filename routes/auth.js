import express from 'express';
import { login, register } from '../controllers/auth.js';

//this is the router
const router = express.Router();


//this is the route for the register page
router.post('/register', register);
router.post('/auth/register', register);


// this exports the router to be used in the server.js file
export default router;