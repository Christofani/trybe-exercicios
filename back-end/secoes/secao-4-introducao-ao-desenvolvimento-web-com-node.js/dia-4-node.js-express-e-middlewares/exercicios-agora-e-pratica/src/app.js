const express = require('express');
const {validateReqs, validateDescription} = require('./middlewares/validateReqs');

const app = express();

app.use(express.json());

app.post('/activities',validateReqs, validateDescription, (req, res) => {
  const newActivate = { ...req.body }
  res.status(200).json({ "message": "Atividade cadastrada com sucesso", newActivate})
});

app.post('/signup', (req, res) => {
  const newUser = { ...req.body }
  res.status(200).json({ "message" : "Usuário cadastrado com sucesso!"})
})

module.exports = app;