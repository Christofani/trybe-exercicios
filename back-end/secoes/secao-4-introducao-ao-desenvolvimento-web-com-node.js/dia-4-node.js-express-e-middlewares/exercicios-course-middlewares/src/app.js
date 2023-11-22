const express = require('express');
require('express-async-errors');
const  verifyId  = require('../src/middlewares/existingId');
const  validateTeam  = require('../src/middlewares/validateTeam');
const apiCredentials = require('./middlewares/apiCredentials');
const teams = require('../src/utils/teams');
const app = express();

let nextId = 3;

app.use(express.json());
app.use(apiCredentials);

app.get('/teams', (req, res) => res.json(teams));

app.get('/teams/:id',verifyId, (req, res) => {
  const id = Number(req.params.id)
  const team = teams.find(t => t.id === id);
    res.json(team);
});


app.post('/teams', validateTeam, (req, res) => {
 const team = {id: nextId, ...req.body};
 teams.push(team)
 nextId += 1;
 res.status(200).json(team);
});

app.put('/teams/:id', verifyId,validateTeam, (req, res) => {
 const id = Number(req.params.id);
 const team = teams.find((t) => t.id === id);
 const index = teams.indexOf(team);
 const updated = { id, ...req.body };
 teams.splice(index, 1, updated);
 res.status(201).json(updated);
  
    res.sendStatus(400);
});

app.delete('/teams/:id',verifyId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  const index = teams.indexOf(team);
  teams.splice(index, 1);
  res.sendStatus(204);
});

module.exports = app;