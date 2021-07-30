FROM node

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV DB_URI=host.docker.internal \
    DB_NAME=lybauth_db \
    DB_PORT=27017 \
    API_PORT=35771

CMD [ "npm", "start" ]