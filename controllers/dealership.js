// Import Dealership model
import Dealership from '../models/dealership.js';



// create a postgres table called dealership with the following columns and data types id - integer - primary key - auto increment ,name - string,address - string,city - string,createdAt - date - default value - current date, updatedAt - date - default value - current date









//get all the dealerships
export const getDealerships = (req, res) => {
  Dealership.findAll()
    .then(dealerships => res.json({dealerships}))
    .catch(err => console.log(err));
}

//get a dealership by id
export const getDealership = (req, res) => {
  Dealership.findByPk(req.params.id)
    .then(dealership => res.json(dealership))
    .catch(err => console.log(err));
}

//add a dealership
export const addDealership = (req, res) => {
  try {
    const { name, address, city } = req.body;
    Dealership.create({
      name,
      address,
      city
    })
      .then(dealership => res.json(dealership))
      .catch(err => console.log(err));
  } catch (error) {
    console.log(error);
  }
}

//update a dealership
export const updateDealership = (req, res) => {
  try {
    const { name, address, city } = req.body;
    Dealership.update({
      name,
      address,
      city
    }, {
      where: {
        id: req.params.id
      }
    })
      .then(dealership => res.json(dealership))
      .catch(err => console.log(err));
  } catch (error) {
    console.log(error);
  }
}

//delete a dealership
export const deleteDealership = (req, res) => {
  try {
    Dealership.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dealership => res.json(dealership))
      .catch(err => console.log(err));
  } catch (error) {
    console.log(error);
  }
}
