FROM node:12.18.1-alpine

LABEL version="1.0" description="node image"

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY package.json /usr/app/

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:dev"]