import request from 'supertest';
import chai from 'chai';
import app from '../app1.js';
import User from '../models/user.js';
import getToken from './utils.js';
import Dealership from '../models/dealership.js';
import { before } from 'mocha';


const { expect } = chai;

// test the enpoint of dealerships

describe('Test endpoint dealerships', () => {
  let token;
  let dealership1;
  let dealership2;

  before(async () => {
    token = await getToken();
    dealership1 = await Dealership.create({
      name: 'Dealership 1',
      address: 'Address 1',
      city: 'City 1',
    });
    dealership2 = await Dealership.create({
      name: 'Dealership 2',
      address: 'Address 2',
      city: 'City 2',
    });

    it('should get all dealerships', async () => {
      const { body, status } = await request(app)
        .get('/dealerships')
        .set('Authorization', `Bearer ${token}`);
      expect(status).to.equal(200);
      expect(body).to.be.an('array');
      expect(body.length).to.equal(2);
      expect(body[0].name).to.equal(dealership1.name);
      expect(body[1].name).to.equal(dealership2.name);
    });
  });
});
