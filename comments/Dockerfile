# Specify a base image
FROM node:16-alpine

# Install some dependencies
WORKDIR /app

# this way npm install wont run every time we rebuild the project if deps have not changed
COPY ./package.json  ./
RUN npm install
COPY ./  ./

#Default command
CMD [ "npm", "start" ]