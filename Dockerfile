# react project build
# 참고 https://velog.io/@navyjeongs/Docker-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%90%EC%84%9C-%EB%8F%84%EC%BB%A4%EB%A1%9C-%EB%B0%B0%ED%8F%AC-%EC%9E%90%EB%8F%99%ED%99%94%ED%95%98%EA%B8%B0
FROM node:18.12.1 as reactBuilder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn run build

FROM nginx
COPY --from=reactBuilder /app/dist /usr/share/nginx/gpss
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
# ec2 용으로 빌드
# docker build -t acrofuture1/gpss-admin --platform linux/amd64 .
# 도커허브 로그인 필요함
# id acrofuture1
# pw Acro@0720
# docker push acrofuture1/gpss-admin