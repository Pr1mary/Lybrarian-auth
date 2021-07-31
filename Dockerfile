# using latest node docker image
FROM node

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# USED_PORT variable is port number that will be used by this container
ARG USED_PORT=35771

# change DB_URI value to "host.docker.internal" if you want to deploy and test in development environment
# change DB_URI value to "db" if you want to deploy to production environment
ENV DB_URI=db \
    DB_NAME=lybauth_db \
    DB_PORT=27017 \
    API_PORT=${USED_PORT}

EXPOSE ${USED_PORT}

CMD [ "npm", "start" ]