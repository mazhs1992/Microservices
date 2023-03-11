# Specify a base image
FROM node:16-alpine


# Add the following lines 
# This are due to bug  see lecture 98 for details
ENV CI=true
ENV WDS_SOCKET_PORT=0
# This are due to bug  see lecture 98 for details


# Install some dependencies
WORKDIR /app

# this way npm install wont run every time we rebuild the project if deps have not changed
COPY ./package.json  ./
RUN npm install
COPY ./  ./

#Default command
CMD [ "npm", "start" ]