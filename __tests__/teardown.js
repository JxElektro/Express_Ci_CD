import db from '../config/database.js';


// This is the teardown function that will be called after each test
after(async () => {
  await db.close();
});
