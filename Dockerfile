FROM node:20.12.1-alpine
COPY . /app
WORKDIR /app

RUN cat /app/.env

RUN npm install -g npm
RUN npm ci
RUN npm run build

CMD ["npm", "run", "start"]
