FROM node:lts

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Install Nest.js
RUN npm install -g @nestjs/cli

# Build the application
RUN npm run build

# Expose port: 3000
EXPOSE 3000

CMD [ "npm", "run", "start:prod"]
