const validateTeam = (req, res, next) => {
  const requiredPropertis = ['nome','sigla'];
  if (requiredPropertis.every((property) => property in req.body)) {
    next();
  } else {
    res.sendStatus(400);
  }
}

module.exports = validateTeam;