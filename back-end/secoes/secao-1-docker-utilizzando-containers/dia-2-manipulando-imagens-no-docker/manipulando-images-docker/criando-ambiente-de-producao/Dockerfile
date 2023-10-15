FROM node:18-alpine as dev

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN npm clean-install

COPY . .

EXPOSE 5556

CMD [ "npm", "run", "dev" ]

# PARTE 2 - Buildar a aplicação

FROM node:18-alpine as builder

WORKDIR /app

COPY --from=dev /app .

RUN npm run build

FROM nginx:1.25.2-alpine as prod

COPY --from=builder /app/dist /usr/share/nginx/html