// Import Dealership model
import Car from '../models/car.js';

//get all the cars

export const getCar = async (req, res) => {
  try {
    const cars = await Car.findAll();
  if(!cars) {
    res.status(404).json({ message: 'No cars found' });
    return; 
  }
  await res.status(200).json(cars);
  } catch (error) {
    console.log(error);
  }

}

//get a car by id
export const getCarById = async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id);
  if(!car) {
    res.status(404).json({ message: 'No car found with id: ' + req.params.id });
    return;
  }
  await res.status(200).json(car);
  } catch (error) {
    console.log(error);
  }
}

//add a car
export const addCar = async (req, res) => {
  try {
    await Car.create(req.body);
    res.json({ message: 'Car added successfully' });
  } catch (error) {
    console.log(error);
  }
}

//update a car
export const updateCar = async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id);
  if(!car) {
    res.status(404).json({ message: 'No car found with id: ' + req.params.id });
    return;
  }
  await Car.update(req.body, {
    where: {
      id: req.params.id
    }
  });
  res.json({ message: 'Car updated successfully' });
  } catch (error) {
    console.log(error);
  }
}

//delete a car
export const deleteCar = async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id);
  if(!car) {
    res.status(404).json({ message: 'No car found with id: ' + req.params.id });
    return;
  }
  await Car.destroy({
    where: {
      id: req.params.id
    }
  });
  res.json({ message: 'Car deleted successfully' });
  } catch (error) {
    console.log(error);
  }
}

// Path: routes\car.js