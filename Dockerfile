FROM node:16-alpine3.16 AS build-stage

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./
COPY nginx.conf ./

RUN npm ci

COPY . ./

RUN npm run build

FROM nginx:1.15

COPY --from=build-stage /usr/src/app/dist/ /usr/share/nginx/html
COPY --from=build-stage /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf

#fire up nginx
EXPOSE 3000
CMD ["nginx","-g","daemon off;"]
