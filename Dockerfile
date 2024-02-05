FROM node:16.20.2-alpine

WORKDIR /app

COPY ./server .

EXPOSE 3000

CMD [ "node", "." ]
