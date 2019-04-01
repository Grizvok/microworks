FROM node:10-alpine as react-build
WORKDIR /app

COPY . ./

RUN yarn
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]

# #Stage 2 - the production environment
# FROM nginx:alpine
# COPY /nginx.conf /etc/nginx/conf.d/default.conf
# COPY --from=react-build /app/.next /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]