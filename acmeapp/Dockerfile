FROM public.ecr.aws/bitnami/node:14

WORKDIR /usr/src/app

RUN npm install

COPY . .

EXPOSE 80
CMD [ "node", "acmeapp.js" ]