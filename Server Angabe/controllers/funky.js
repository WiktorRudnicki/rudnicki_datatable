const { getMovieDB, rentMovieDB } = require('../model/funkyDB');

async function getMovie(req, res) {
  const result = await getMovieDB();
  res.status(200).json(result);
}

async function rentMovie(req, res) {
  const result = await rentMovieDB(req.params.id, req.body.status);
  res.status(200).json(result);
}

module.exports = { getMovie, rentMovie };
