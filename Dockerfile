# syntax=docker/dockerfile:1

FROM node:16.13.0
ENV NODE_ENV=production
EXPOSE 4050

WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm ci
COPY . .
CMD [ "node", "index.js" ]
