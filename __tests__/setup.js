// Constantes Reutilizables en los tests
import request from 'supertest';
import app from '../app.js';

before(async () => {
   //create an user
  const payload = {
    name: 'test',
    email: 'test@test.com',
    password: 'test1234',
  };

  // espera la respuesta de la peticion y envia el payload
  await request(app).post('/auth/register').send(payload); 
});
