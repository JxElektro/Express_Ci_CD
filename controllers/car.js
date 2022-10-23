// Import Dealership model
import Car from '../models/car.js';

//get all the cars

export const getCar = (req, res) => {
  try {
    Car.findAll()
      .then(cars => res.json(cars))
      .catch(err => console.log(err));
  } catch (error) {
    console.log(error);
  }

}

//get a car by id
export const getCarById = (req, res) => {
  try {
    Car.findByPk(req.params.id)
      .then(car => res.json(car))
      .catch(err => console.log(err));
  } catch (error) {
    console.log(error);
  }

}


export const addCar = (req, res) => {

  try {
    const { make, model, year, price, dealershipId } = req.body;
    Car.create({
      make,
      model,
      year,
      price,
      dealershipId
    })
      .then(car => res.json(car))
      .catch(err => console.log(err));
  } catch (error) {
    console.log(error);
  }

}

//update a car
export const updateCar = (req, res) => {
  try {
    const { make, model, year, price, dealershipId } = req.body;
    Car.update({
      make,
      model,
      year,
      price,
      dealershipId
    }, {
      where: {
        id: req.params.id
      }
    })
      .then(car => res.json(car))
      .catch(err => console.log(err));
  } catch (error) {
    console.log(error);
  }

}

//delete a car
export const deleteCar = (req, res) => {
  try {
    Car.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(car => res.json(car))
      .catch(err => console.log(err));
  } catch (error) {
    console.log(error);
  }

}
