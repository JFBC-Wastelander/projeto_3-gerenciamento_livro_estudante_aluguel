const estudante_control = require("./estudante_model.js");
const livro_control = require("./livro_model.js");

let proxId = 1;

const model = (body, id = proxId++) => {
  if (
    body.aluguel != undefined &&
    body.aluguel != "" &&
    body.devolucao != undefined &&
    body.devolucao != "" &&
    estudante_control.show(body.estudante_id) &&
    livro_control.show(body.livro_id)
  ) {
    return {
      id,
      aluguel: body.aluguel,
      devolucao: body.devolucao,
      estudante_id: body.estudante_id,
      livro_id: body.livro_id,
    };
  }
};

module.exports = model;
