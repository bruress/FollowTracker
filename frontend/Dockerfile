FROM node:22-alpine as builder

WORKDIR /app

ARG VITE_API_URL=/api

ENV VITE_API_URL=$VITE_API_URL

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build 

FROM nginx:alpine as runner

COPY nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/dist .

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]
