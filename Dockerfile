# Stage 1: Build the Angular application
FROM node:18.17.0 AS build
WORKDIR /app

# Install Angular CLI globally and copy package files
RUN npm install -g @angular/cli@16.1.6
COPY package.json package-lock.json ./
RUN npm install

# Copy the project files and build the app
COPY . ./
RUN ng build --configuration production

# Stage 2: Serve the app with nginx
FROM nginx:stable-alpine
COPY --from=build /app/dist/angular-sample-project /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]