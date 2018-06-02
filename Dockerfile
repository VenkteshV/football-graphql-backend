FROM node:8.9.4-alpine
COPY . /graphql-gyan
WORKDIR /graphql-gyan
RUN npm install && \
    npm run build && \
    npm cache verify
EXPOSE 5000
CMD npm run serve-prod
