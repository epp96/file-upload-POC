FROM node:alpine
# Create app directory
WORKDIR /app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json .

# this is purely bc of development
# RUN apt-get update
# RUN apt-get install vim
RUN npm install -g nodemon
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "nodemon", "server.js" ]