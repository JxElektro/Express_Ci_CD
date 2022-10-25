import request from 'supertest';
import chai from "chai";
import app from '../app.js';
import User from '../models/user.js';
import { before } from 'mocha';


const { expect } = chai;



/*
describe('Auth - Test', () => {
  
  describe('Check 201 y que sea objeto', () => {
    it('should register a new user', async () => {
      const res = await request(app)
        .post('/auth/register')
        .send({
          username: 'test',
          email: 'test@gmail.com',
          password: 'test',
        });
      expect(res.statusCode).to.equal(201);
      expect(res.body).to.be.an('object');
      });
    });
  });
*/
