const serviceXmen = require(`../services/x-men.service`);

const findControllerAllXmen = (_, res) => {
  const xMenAll = serviceXmen.findServiceAllXmen();
  res.send(xMenAll);
};

const findControllerIdXmen = (req, res) => {
  const id = Number(req.params.id);
  const idXmen = serviceXmen.findServiceIdXmen(id);
  res.send(idXmen);
};

const createControllerXmen = (req, res) => {
  const xMen = req.body;
  const newXmen = serviceXmen.createServiceXmen(xMen);
  res.send(newXmen);
};

const updateControllerXmen = (req, res) => {
  const id = Number(req.params.id);
  const xMenEdt = req.body;
  const xMenUpdate = serviceXmen.updateServiceXmen(id, xMenEdt);
  res.send(xMenUpdate);
};

const deleteControllerXmen = (req, res) => {
  const id = Number(req.params.id);
  serviceXmen.deleteServiceXmen(id);
  res.send({ message: `X-Men deletado com sucesso!` });
};

module.exports = {
  findControllerAllXmen,
  findControllerIdXmen,
  createControllerXmen,
  updateControllerXmen,
  deleteControllerXmen,
};
