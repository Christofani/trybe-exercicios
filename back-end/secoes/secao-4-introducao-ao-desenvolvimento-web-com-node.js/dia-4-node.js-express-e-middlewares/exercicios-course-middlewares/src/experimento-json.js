// src/experimento-json.js

const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

app.use(express.static('images/brasao'));
app.use(morgan('combined'));
app.use(cors());
app.post('/fail', (req, res) => {
  res.status(200).json({ greeting: `Hello, ${req.body.nome}!` });
});

app.use(express.json());

app.post('/hello', (req, res) => {
  // req.body agora está disponível
  res.status(200).json({ greeting: `Hello, ${req.body.nome}!` });
});

app.listen(3000, () => { console.log('Ouvindo na porta 3000'); });