
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
