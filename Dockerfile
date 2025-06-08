# Stage 1: Build React app
FROM node:18-alpine AS builder

WORKDIR /app
COPY . .

RUN npm install

RUN npm run build

# Stage 2: Serve app with Nginx
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
