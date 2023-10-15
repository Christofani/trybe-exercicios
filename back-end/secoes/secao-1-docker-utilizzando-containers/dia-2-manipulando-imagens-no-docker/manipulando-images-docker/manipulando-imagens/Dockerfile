# Com base numa imagem com node instalado
FROM node:18
# Copie oarquivo index.js para a pasta /tmp
COPY index.js /tmp
# Execute o arquivo index.js com node
CMD ["node", "/tmp/index.js"]

# RUN é executado durante o build da imagem
# CMD é executado quando o container é iniciado