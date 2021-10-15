const db = require('../db/index');

async function getCarsDB() {
  const result = await db.query('SELECT * from cars');
  return result.rows;
}

async function changeStatusCarDB(id, status) {
  await db.query('update cars set status = $1 where id = $2', [status, id]);
  return true;
}

async function deleteCarDB(id) {
  await db.query('delete from cars where id = $1'[id]);
  return true;
}

async function searchOwnerDB(first, last) {
  const result = await db.query('select id from owners where first_name = $1 and last_name = $2', [first, last]);
  return result;
}

async function addCarDB(ownerId, body) {
  await db.query('insert into cars (title, status, price, image, miles, yearOfMake, description, owner) values ($1, $2, $3, $4, $5, $6, $7, $8)', [body.title, body.status, body.price, body.image, body.miles, body.yearOfMake, body.description, ownerId]);
}

module.exports = { getCarsDB, changeStatusCarDB, deleteCarDB, searchOwnerDB, addCarDB };
