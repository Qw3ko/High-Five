FROM node:22.3.0
WORKDIR /usr/src/app
COPY package*.json ./ 
RUN yarn install
COPY . .
CMD [ "yarn", "dev" ]

