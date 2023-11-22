// const validateTeam = (req, res, next) => {
//   const requiredPropertis = ['nome','sigla'];
//   if (requiredPropertis.every((property) => property in req.body)) {
//     next();
//   } else {
//     res.sendStatus(400);
//   }
// }


const validateTeam = (req, res, next) => {
  const {name, sigla} = req.body;
  if(!name) return res.status(400).json({message: 'O campo "nome" é obrigatório.'})
  if(!sigla) return res.status(400).json({message: 'O campo "sigla" é obrigatório.'})
  next();
}
module.exports = validateTeam;