# FROM mhart/alpine-node:11 AS builder
FROM node:alpine AS builder
WORKDIR /app 
# WORKDIR /usr/src/app

COPY package.json ./
RUN npm install
# RUN npm install create-react-app
COPY . .

CMD ["npm", "run", "start"]
# RUN npm run build

# FROM mhart/alpine-node
# RUN yarn global add serve
# WORKDIR /app
# COPY --from=builder /usr/src/app/build .
# CMD ["serve", "-p", "3000", "-s", "."]
