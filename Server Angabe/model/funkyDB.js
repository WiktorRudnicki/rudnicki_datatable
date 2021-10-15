const db = require('../db/index');

async function getMovieDB() {
  const result = await db.query('SELECT * from movies');
  return result.rows;
}

async function rentMovieDB(id, status) {
  await db.query('update movie set status = $1 where id = $2', [status, id]);
  return true;
}

module.exports = { getMovieDB, rentMovieDB };
