const model = require("../models/estudante_model.js");

const db = [];

const store = (body) => {
  let novo = model(body);
  if (novo) {
    db.push(novo);
    return 201;
  } else {
    return 400;
  }
};

const index = () => db;

const show = (id) => db.find((el) => el.id == id);

const update = (body, id) => {
  let indice = db.findIndex((el) => el.id == id);
  let novo = model(body, parseInt(id));
  if (novo && indice != -1) {
    db[indice] = novo;
    return 200;
  } else {
    return 400;
  }
};

const destroy = (id) => {
  let indice = db.findIndex((el) => el.id == id);
  if (indice != -1) {
    db.splice(indice, 1);
  }
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};

