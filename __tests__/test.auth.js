import request from 'supertest';
import chai from "chai";
import app from '../src/app.js';
import User from '../src/models/user.js';


const { expect } = chai;



// test de prueba
it('should allow to create users', async () => {
  const payload = {
    'name': 'teast',
    'email': 'josae@email.com',
    'password': '123456'
  }
  const { body, status } = await request(app).post('/auth/register').send(payload);
  expect(status).to.equal(201);

  // check the userId
  expect(body).to.have.property('userId');
  const userId = body.userId;
  const user = await User.findByPk(userId);
  expect(user.name).to.equal(payload.name);
});