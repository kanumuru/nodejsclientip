FROM node:12.18.1
WORKDIR /app
COPY . .
RUN npm install express
RUN npm install express-device
EXPOSE 5001
CMD [ "node", "app.js" ]
