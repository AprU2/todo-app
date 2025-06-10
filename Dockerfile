# Stage 1: Build React app
FROM node:18-alpine AS builder

WORKDIR /app
COPY . .

# Set build-time environment variable for Vite and generate .env file
ARG VITE_API_URL

RUN echo "VITE_API_URL=${VITE_API_URL}" > .env

RUN npm install
RUN npm run build

# Stage 2: Serve app with Nginx
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
