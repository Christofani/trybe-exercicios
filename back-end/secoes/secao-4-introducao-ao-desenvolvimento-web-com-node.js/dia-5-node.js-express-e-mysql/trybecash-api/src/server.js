require('dotenv').config();
const app = require('./app');
const PORT = 3003;

app.listen(PORT, async () => {
  console.log(`API TrybeCash está sendo executada na porta ${PORT}`);
  console.log(`Valor da variável de ambiente $USER: ${process.env.USER}`);
});