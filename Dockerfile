# react project build
# 참고 https://velog.io/@navyjeongs/Docker-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%90%EC%84%9C-%EB%8F%84%EC%BB%A4%EB%A1%9C-%EB%B0%B0%ED%8F%AC-%EC%9E%90%EB%8F%99%ED%99%94%ED%95%98%EA%B8%B0
FROM node:18.12.1 as reactBuilder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn config set "strict-ssl" false
RUN yarn
COPY . .
RUN yarn run build --mode production

FROM nginx
COPY --from=reactBuilder /app/dist /usr/share/nginx/gpss
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
# 사내 ec2 용으로 빌드
# docker build -t acrofuture1/gpss-admin --platform linux/amd64 .
# 도커허브 로그인 필요함
# docker push acrofuture1/gpss-admin

# 현대 원격 ecr 용 빌드
# aws ecr get-login-password --region eu-central-1 | docker login --username AWS --password-stdin 343821710662.dkr.ecr.eu-central-1.amazonaws.com
# docker build -t admin-front-service .
# docker tag admin-front-service:latest 343821710662.dkr.ecr.eu-central-1.amazonaws.com/admin-front-service:latest
# docker push 343821710662.dkr.ecr.eu-central-1.amazonaws.com/admin-front-service:latest