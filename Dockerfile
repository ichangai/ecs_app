FROM node:18.14.0-alpine
RUN apk add --no-cache nodejs npm

WORKDIR /app
COPY package.json /app
RUN npm install

COPY . /app

EXPOSE 7000
CMD ["npm", "start"]