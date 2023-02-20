FROM nginx

COPY src /usr/share/nginx/html
COPY default.conf.template /etc/nginx/templates

ENV NGINX_HOST="http://api.kcisa.kr/API_CNV_049/request"