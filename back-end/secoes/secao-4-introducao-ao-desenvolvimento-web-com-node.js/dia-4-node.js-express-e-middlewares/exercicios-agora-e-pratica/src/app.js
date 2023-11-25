const express = require('express');
const {validateReqs, validateDescription, valideUser} = require('./middlewares/validateReqs');
const auth = require('./middlewares/auth');

const app = express();

app.use(express.json());

app.post('/activities', auth ,validateReqs, validateDescription, (req, res) => {
  const newActivate = { ...req.body }
 return res.status(201).json({ "message": "Atividade cadastrada com sucesso", newActivate})
});

app.post('/signup',valideUser)

module.exports = app;