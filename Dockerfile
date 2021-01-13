FROM node:14.15.2 as builder
EXPOSE 4200
WORKDIR /app
COPY package*.json /app/
RUN npm install -g @angular/cli ngx-audio-player
COPY ./ /app/
RUN ng add @ng-bootstrap/ng-bootstrap
ARG configuration=production
RUN npm run build -- --output-path=./dist/out --configuration $configuration

FROM nginx:1.15
COPY --from=builder /app/dist/out/ /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
