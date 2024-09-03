let proxId = 1;

let apenasNumeros = true;
if (isNaN(parseInt(body.ano))) {
  apenasNumeros = false;
}

const model = (body, id = proxId++) => {
  if (
    body.titulo != undefined &&
    body.titulo != "" &&
    body.autor != undefined &&
    body.autor != "" &&
    body.genero != undefined &&
    body.genero != "" &&
    body.ano != undefined &&
    body.ano != "" &&
    apenasNumeros
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
