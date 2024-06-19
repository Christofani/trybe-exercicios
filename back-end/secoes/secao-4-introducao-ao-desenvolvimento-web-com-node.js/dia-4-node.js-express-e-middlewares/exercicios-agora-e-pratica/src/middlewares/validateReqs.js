const generateToken = require('../../utils/generateToken');

const validateReqs = (req, res, next) => {
  const { name ,price } = req.body;
  if(!name) return res.status(400).json({message : 'O campo nome é obrigatório.'});
  if(name.length < 4) return res.status(400).json({ "message": "O campo name deve ter pelo menos 4 caracteres" });
  if(!Number(price)) return res.status(400).json({ "message": "O campo price é obrigatório" });
  if(Number(price) < 0) res.status(400).json({ "message": "O campo price deve ser um número maior ou igual a zero" });
  next();
};

const validateDescription = (req, res, next) => {
  const { description } = req.body;
  const { createdAt, rating, difficulty } = description;
  if(!description) return res.status(400).json({ "message": "O campo description é obrigatório" });
  if(!createdAt) return res.status(400).json({ "message": "O campo createdAt é obrigatório" });
  const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!dateRegex.test(createdAt)) {
    return res.status(400).json({ "message": "O formato da data createdAt é inválido. Use o formato dd/mm/aaaa." });
  }
  if (!Number(rating) || !Number.isInteger(rating) || rating < 1 || rating > 5) {
    return res.status(400).json({ "message": "O campo rating deve ser um número inteiro entre 1 e 5" });
  }
  if(!difficulty) return res.status(400).json({ "message": "O campo difficulty é obrigatório" });
  if(difficulty !== "Fácil" && difficulty !== 'Médio' && difficulty !== 'Difícil') return res.status(400).json({"message": "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'" });
  next();
}

const valideUser = (req, res, next) => {
  const {firstName, email ,phone ,password } = req.body;
  if([firstName, email, phone, password].includes(undefined)) {
    return res.status(401).json({ Message : "Campos ausentes!"})
  }
  const token = generateToken();
  res.status(200).json({ token });
  return next();
}

module.exports = {
  validateDescription,
  validateReqs,
  valideUser,
};