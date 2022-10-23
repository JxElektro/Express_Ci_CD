
/* Creacion de la Tabla dealership */

CREATE TABLE dealership (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  address VARCHAR(255),
  city VARCHAR(255),
  createdAt TIMESTAMP DEFAULT NOW(),
  updatedAt TIMESTAMP DEFAULT NOW()
);

/* Creacion de la Tabla car */
CREATE TABLE car (
  id SERIAL PRIMARY KEY,
  make VARCHAR(255),
  model VARCHAR(255),
  year INTEGER,
  price INTEGER,
  dealershipId INTEGER REFERENCES dealership(id),
  createdAt TIMESTAMP DEFAULT NOW(),
  updatedAt TIMESTAMP DEFAULT NOW()
);

/* Creacion de la Tabla Client con su relacion con la tabla car segun el id de la tabla car */

CREATE TABLE client (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  carId INTEGER REFERENCES car(id),
  createdAt TIMESTAMP DEFAULT NOW(),
  updatedAt TIMESTAMP DEFAULT NOW()
);


/* Modelo de la Tabla dealership Postman */
{
    "name": "Tesla",
    "address": "123 Main St",
    "city": "New York"
 }

/* Modelo de la Tabla car Postman */

{
    "make": "Tesla",
    "model": "Model S",
    "year": 2018,
    "price": 100000,
    "dealershipId": 1
}

/* Modelo de la Tabla client Postman */
  
  {
      "name": "John Doe",
      "email": "JohnDoe@gmail.com
      "carId": 1
  }