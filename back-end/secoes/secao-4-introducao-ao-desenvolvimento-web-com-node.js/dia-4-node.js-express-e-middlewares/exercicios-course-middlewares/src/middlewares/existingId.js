const teams = require('../../src/utils/teams')

const verifyId = (req, res, next) => {
  const id = Number(req.params.id);
  if(teams.some((t) => t.id === id)) {
    next();
  } else {
    res.status(400).send({ message: 'ID inválido.' })
  }
};

module.exports = verifyId;
