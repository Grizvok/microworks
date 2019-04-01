FROM node:10-alpine
WORKDIR /app

COPY . ./
RUN yarn
EXPOSE 3001
CMD ["yarn", "start"]