FROM node:alpine

WORKDIR /app
COPY package-lock.json package.json /app/
RUN npm install

COPY public /app/public
COPY src /app/src
COPY tsconfig.json /app/
RUN ls
RUN npm run build

RUN rm -rf public src node_modules tsconfig.json package-lock.json package.json

WORKDIR /app/server
COPY server /app/server/
RUN npm install

EXPOSE 3000

CMD ["node", "server.js"]
