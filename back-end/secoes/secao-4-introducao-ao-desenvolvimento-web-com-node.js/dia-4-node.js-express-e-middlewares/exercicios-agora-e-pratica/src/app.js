const express = require('express');
const {validateReqs, validateDescription} = require('./middlewares/validateReqs');

const app = express();

app.use(express.json());

app.post('/activities',validateReqs, validateDescription, (req, res) => {
  const newActivate = { ...req.body }
  res.status(200).json({message: "Atividade cadastrada com sucesso", newActivate})
})

module.exports = app;