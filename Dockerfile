FROM node:10.11.0-alpine

WORKDIR /usr/src/app
COPY . .
RUN npm install

CMD node .