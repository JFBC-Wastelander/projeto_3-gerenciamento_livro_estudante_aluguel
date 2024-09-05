const estudante_control = require("../controllers/estudante_controller.js");
const livro_control = require("../controllers/livro_controller.js");

let proxId = 1;
const model = (body, id = proxId++) => {
  if (
    body.dataAluguel != undefined &&
    body.dataAluguel != "" &&
    body.dataDevolucao != undefined &&
    body.dataDevolucao != "" &&
    estudante_control.show(body.estudanteId) &&
    livro_control.show(body.livroId)
  ) {
    return {
      id,
      dataAluguel: body.dataAluguel,
      dataDevolucao: body.dataDevolucao,
      estudanteId: +body.estudanteId,
      livroId: +body.livroId
    };
  }
};

module.exports = model;

