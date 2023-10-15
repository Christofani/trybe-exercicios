# Ambiente com node18
FROM node:18-alpine
# Quando iniciar o container, a boa prática e sempre definir um dieretório de trabalho
# Cria a pasta /app e entra nela 
WORKDIR /app 
# Copiar package.json
# ./ é minha pasta principal
COPY package*.json ./
# Rodarum npm install na build => RUN
# Instalar dependências (evitando conflitos)
RUN npm clean-install

# Copiar o resto dos arquivos
COPY . .

# Expor a porta 5173 , é uma documentação para o desenvolvedor
EXPOSE 5173
# npm run dev , rodar a aplicação na inicialização => CMD
CMD ["npm", "run", "dev"]