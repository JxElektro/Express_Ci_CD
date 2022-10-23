// Import Dealership model
import Client from '../models/client.js';

// get all the clients
export const getClient = async (req, res) => {
  try {
    const clients = await Client.findAll();
    if (!clients) {
      res.status(404).json({ message: 'No clients found' });
      return;
    }
    await res.status(200).json(clients);
  } catch (error) {
    console.log(error);
  }
};

// get client by id
export const getClientById = async (req, res) => {
  try {
    const client = await Client.findByPk(req.params.id);
    if (!client) {
      res.status(404).json({ message: 'No client found with id: ' + req.params.id });
      return;
    }
    await res.status(200).json(client);
  } catch (error) {
    console.log(error);
  }
};

// add a client
export const addClient = async (req, res) => {
  try {
    await Client.create(req.body);
    res.json({ message: 'Client added successfully' });
  } catch (error) {
    console.log(error);
  }
};

//update a car
export const updateClient = async (req, res) => {
  try {
    const client = await Client.findByPk(req.params.id);
    if (!client) {
      res.status(404).json({ message: 'No client found with id: ' + req.params.id });
      return;
    }
    await Client.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.json({ message: 'Client updated successfully' });
  } catch (error) {
    console.log(error);
  }
};

//delete a car
export const deleteClient = async (req, res) => {
  try {
    const client = await Client.findByPk(req.params.id);
    if (!client) {
      res.status(404).json({ message: 'No client found with id: ' + req.params.id });
      return;
    }
    await Client.destroy({
      where: {
        id: req.params.id
      }
    });
    res.json({ message: 'Client deleted successfully' });
  } catch (error) {
    console.log(error);
  }
};

// Path: routes\client.js