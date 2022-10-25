import db from '../config/database.js';

//close the database connection before the test begins
before(async () => {
  await db.sequelize.sync({ force: true });
});

// This is the teardown function that will be called after each test
after(async () => {
  await db.close();
});
