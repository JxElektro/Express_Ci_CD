// Import Dealership model
import Client from '../models/client.js';

// get all the clients
export const getClient = (req, res) => {
  try {
    Client.findAll()
      .then(client => res.json(client))
      .catch(err => console.log(err));
  } catch (error) {
    console.log(error);
  }

}

// get client by id
export const getClientById = (req, res) => {
  try {
    Client.findByPk(req.params.id)
      .then(client => res.json(client))
      .catch(err => console.log(err));
  } catch (error) {
    console.log(error);
  }

}

// add a client
export const addClient = (req, res) => {
  try {
    const { name, email, cardid } = req.body;
    Client.create({
      name,
      email,
      cardid
    })
      .then(car => res.json(car))
      .catch(err => console.log(err));
  } catch (error) {
    console.log(error);
  }

}

//update a car
export const updateClient = (req, res) => {
  try {
    const { name, email, cardid } = req.body;
    Car.update({
      name,
      email,
      cardid
    }, {
      where: {
        id: req.params.id
      }
    })
      .then(clien => res.json(client))
      .catch(err => console.log(err));
  } catch (error) {
    console.log(error);
  }

}

//delete a car
export const deleteClient = (req, res) => {
  try {
    Client.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(client => res.json(client))
      .catch(err => console.log(err));
  } catch (error) {
    console.log(error);
  }

}
