## Build Stage
FROM node:15.13-alpine as build

WORKDIR /

COPY package.json ./package.json
COPY package-lock.json package-lock.json

RUN npm ci --production
RUN npm prune --production

COPY . .

RUN npm run build

## Production Stage

# NGINX Web Server
FROM nginx:1.12-alpine as prod

# COPY --from=build /podium-helper/build /usr/share/nginx/html
COPY --from=build /build /usr/share/nginx/html

EXPOSE 80

ENV WEBSOCKET=wss://timing.usacnation.com/ws/sro

CMD ["nginx", "-g", "daemon off;"]