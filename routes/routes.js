import express from 'express';

// import dealership controllers

import { getDealerships, getDealership, addDealership, updateDealership, deleteDealership } from '../controllers/dealership.js';

// import car controllers
import { getCar, getCarById, addCar, updateCar, deleteCar } from '../controllers/car.js';

// import client controllers
import { getClient, getClientById, addClient, updateClient, deleteClient } from '../controllers/client.js';
// init router
const router = express.Router();

import { isUserAuthenticated } from '../middlewares/auth.js';

// define routes

// Dealership routes
router.get('/dealerships', isUserAuthenticated, getDealerships);
router.get('/dealership/:id', getDealership);
router.post('/dealership', addDealership);
router.put('/dealership/:id', updateDealership);
router.delete('/dealership/:id', deleteDealership);

// Car routes
router.get('/cars', getCar);
router.get('/car/:id', getCarById);
router.post('/car', addCar);
router.put('/car/:id', updateCar);
router.delete('/car/:id', deleteCar);

// Client routes
router.get('/clients', getClient);
router.get('/client/:id', getClientById);
router.post('/client', addClient);
router.put('/client/:id', updateClient);
router.delete('/client/:id', deleteClient);


export default router;
