
FROM nginx:latest
COPY build /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80 443
ENTRYPOINT ["nginx", "-g", "daemon off;"]
