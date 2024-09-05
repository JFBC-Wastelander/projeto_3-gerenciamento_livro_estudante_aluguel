let proxId = 1;

const model = (body, id = proxId++) => {
  if (
    body.titulo != undefined &&
    body.titulo != "" &&
    body.autor != undefined &&
    body.autor != "" &&
    body.genero != undefined &&
    body.genero != "" &&
    body.ano != undefined &&
    body.ano != ""
  ) {
    return {
      id,
      titulo: body.titulo,
      autor: body.autor,
      genero: body.genero,
      ano: +body.ano,
    };
  }
};

module.exports = model;

