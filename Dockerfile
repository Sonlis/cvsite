FROM node:14.13.1-alpine3.10 AS build 
COPY . /
RUN yarn install 
RUN yarn global add react-scripts
RUN yarn build


FROM nginx:latest
COPY --from=build /build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]]