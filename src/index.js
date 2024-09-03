const express = require("express");

const livro_router = require("./routers/livro_router.js");
const estudanre_router = require("./routers/estudante_router.js");
const aluguel_router = require("./routers/aluguel_router.js");

const app = express();
const port = 5000;

app.use(express.json());

app.use("/livro", livro_router); // GERENCIAMENTO DE LIVRO

app.use("/estudante", estudanre_router); // GERENCIAMENTO DE ESTUDANTE

app.use("/aluguel", aluguel_router); // GERENCIAMENTO DE ALUGUEL

app.listen(port, () => {
  console.log(`Server running in ${port} port`);
});
