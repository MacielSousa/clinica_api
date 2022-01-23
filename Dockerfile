FROM node

WORKDIR /usr/app

COPY package.json ./

RUN npm install -g npm@8.3.1
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]