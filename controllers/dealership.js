// Import Dealership model
import Dealership from '../models/dealership.js';

//get all the dealerships
export const getDealerships = async (req, res) => {
  try {
    const dealerships = await Dealership.findAll();
  if(!dealerships) {
    res.status(404).json({ message: 'No dealerships found' });
    return; 
  }
  await res.status(200).json(dealerships);
  } catch (error) {
    console.log(error);
  }
}

//get a dealership by id
export const getDealership = async (req, res) => {
  try {
    const dealership = await Dealership.findByPk(req.params.id);
  if(!dealership) {
    res.status(404).json({ message: 'No dealership found with id: ' + req.params.id });
    return;
  }
  await res.status(200).json(dealership);
  } catch (error) {
    console.log(error);
  }
}

//add a dealership
export const addDealership = async (req, res) => {
  try {
    await Dealership.create(req.body);
    res.json({ message: 'Dealership added successfully' });
  } catch (error) {
    console.log(error);
  }
}

//update a dealership
export const updateDealership = async (req, res) => {
  try {
    const dealership = await Dealership.findByPk(req.params.id);
  if(!dealership) {
    res.status(404).json({ message: 'No dealership found with id: ' + req.params.id });
    return;
  }
  await Dealership.update(req.body, {
    where: {
      id: req.params.id
    }
  });
  res.json({ message: 'Dealership updated successfully' });
  } catch (error) {
    console.log(error);
  }
}

//delete a dealership
export const deleteDealership = async (req, res) => {
  try {
    const dealership = await Dealership.findByPk(req.params.id);
  if(!dealership) {
    res.status(404).json({ message: 'No dealership found with id: ' + req.params.id });
    return;
  }
  await Dealership.destroy({
    where: {
      id: req.params.id
    }
  });
  res.json({ message: 'Dealership deleted successfully' });
  } catch (error) {
    console.log(error);
  }
}

// Path: routes\dealership.js