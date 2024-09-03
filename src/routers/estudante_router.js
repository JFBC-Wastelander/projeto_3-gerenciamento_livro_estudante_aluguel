const express = require("express");
const estudante_control = require("../controllers/estudante_controller");
const router = express.Router();

router.get("/", (req, res) => {
  res.json(estudante_control.index());
});

router.get("/:id", (req, res) => {
  res.json(estudante_control.show(req.params.id));
});

router.post("/", (req, res) => {
  const code = estudante_control.store(req.body);
  res.status(code).json();
});

router.put("/:id", (req, res) => {
  const code = estudante_control.update(req.body, req.params.id);
  res.status(code).json();
});

router.delete("/:id", (req, res) => {
  estudante_control.destroy(req.params.id);
  res.json();
});

module.exports = router;
