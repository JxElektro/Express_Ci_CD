import express from 'express';

// import dealership controllers

import { getDealerships, getDealership, addDealership, updateDealership, deleteDealership } from '../controllers/dealership.js';

// import car controllers
import { getCar, getCarById, addCar, updateCar, deleteCar } from '../controllers/car.js';

// init router
const router = express.Router();

// define routes

// Dealership routes
router.get('/dealerships', getDealerships);
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

export default router;
