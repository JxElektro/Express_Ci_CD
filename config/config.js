
function runDotEnv() {
  if (process.env.ENV === 'development') {
    import('dotenv').then(dotenv => dotenv.config({ path: '.env' }));
  }
}

runDotEnv();


const config = {
 development: {
    username: process.env.DB_DEV_USER || 'postgress',
    password: process.env.DB_DEV_PASSWORD || 'exfZPQRrQVbolNGhwNKfvN7GukeabIM2',
    database: process.env.DB_DEV_DB_NAME|| 'express_j9yk',
    host: process.env.DB_DEV_HOST || 'dpg-cdhdvhpgp3jpn5afdif0-a',
    dialect: 'postgres',
  },
  test: {
    username: process.env.DB_TEST_USER || 'postgres',
    password: process.env.DB_TEST_PASSWORD || 'alcap1990',
    database: process.env.DB_TEST_DB_NAME || 'postgres',
    host:  process.env.DB_TEST_HOST || 'localhost',
    port: process.env.DB_TEST_PORT || 5432,
    logging: false,
    dialect: process.env.DB_TEST_DIALECT || 'postgres',
  },
  production: {
    username: process.env.DB_DEV_USER,
    password: process.env.DB_DEV_PASSWORD,
    database: process.env.DB_DEV_DB_NAME,
    host: process.env.DB_DEV_HOST,
    logging: true,
    dialect: 'postgres',
  },
};

export default config;