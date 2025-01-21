FROM alpine

# Installs latest packages.
RUN apk add --no-cache \
      nodejs \
      yarn

WORKDIR /app
RUN apk update
RUN apk add npm
RUN apk add nodejs 18.14.2
RUN apk add nextjs 13.2.3
COPY ./ ./
RUN chmod -R 777 /app/
RUN npm i -g nodemon
RUN npm i -g ts-node
RUN npm install
CMD ["npm","run","dev"]