FROM node:10-alpine
WORKDIR /app

COPY . ./
RUN yarn
EXPOSE 3002
CMD ["yarn", "start"]