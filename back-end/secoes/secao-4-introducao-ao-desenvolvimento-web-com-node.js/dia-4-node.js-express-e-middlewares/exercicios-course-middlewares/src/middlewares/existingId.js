const teams = require('../../src/utils/teams')

// const verifyId = (req, res, next) => {
//   const id = Number(req.params.id);
//   if(teams.some((t) => t.id === id)) {
//     next();
//   } else {
//     res.status(400).send({ message: 'ID inválido.' })
//   }
// };

const verifyId = (req, res, next) => {
  const id = Number(req.params.id);
  if(!teams.some((t) => t.id === id)) {
    return res.sendStatus(404).json({message : 'Time não encontrado'})
  }
}

module.exports = verifyId;
