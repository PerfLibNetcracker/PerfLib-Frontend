FROM node:14.15.2
EXPOSE 4200
RUN mkdir -p /app
WORKDIR /app
COPY . /app
RUN npm install -g @angular/cli
RUN ng add @ng-bootstrap/ng-bootstrap
ENTRYPOINT [ "ng", "serve", "--host", "0.0.0.0"]
