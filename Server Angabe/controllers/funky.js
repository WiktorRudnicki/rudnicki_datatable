const { getCarsDB, changeStatusCarDB, deleteCarDB, searchOwnerDB, addCarDB } = require('../model/funkyDB');

async function getCars(req, res) {
  const result = await getCarsDB();
  res.status(200).json(result);
}

async function changeStatusCar(req, res) {
  const result = await changeStatusCarDB(req.params.id, req.body.status);
  res.status(200).json(result);
}

async function deleteCar(req, res) {
  const result = await deleteCarDB(req.params.id);
  res.status(200).json(result);
}

async function addCar(req, res) {
  const result = await searchOwnerDB(req.params.id);
  if (result != null) {
    await addCarDB(result, req.body);
    res.status(200).json(result);
  }
}

module.exports = { getCars, changeStatusCar, deleteCar, addCar };
