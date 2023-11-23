const express = require('express');
const  verifyId  = require('../src/middlewares/existingId');
const  validateTeam  = require('../src/middlewares/validateTeam');
const apiCredentials = require('./middlewares/apiCredentials');
const teams = require('../src/utils/teams');

const router = express.Router();


let nextId = 3;



router.get('/', (req, res) => res.json(teams));

router.use(apiCredentials);

router.get('/:id',verifyId, (req, res) => {
  const id = Number(req.params.id)
  const team = teams.find(t => t.id === id);
    res.json(team);
});


router.post('/', validateTeam, (req, res) => {
  if(!req.teams.teams.includes(req.body.sigla) && teams.every((t) => t.sigla !== req.body.sigla)) {
    return res.status(422).json({message: 'Já existe um time com essa sigla'});
  }
 const team = {id: nextId, ...req.body};
 teams.push(team)
 nextId += 1;
 res.status(201).json(team);
});

router.put('/:id', verifyId,validateTeam, (req, res) => {
 const id = Number(req.params.id);
 const team = teams.find((t) => t.id === id);
 const index = teams.indexOf(team);
 const updated = { id, ...req.body };
 teams.splice(index, 1, updated);
 res.status(201).json(updated);
  
    res.sendStatus(400);
});

router.delete('/:id',verifyId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  const index = teams.indexOf(team);
  teams.splice(index, 1);
  res.sendStatus(204);
});

module.exports = router;