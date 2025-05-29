FROM node:20-alpine AS build
WORKDIR /usr/www/backend
COPY package.json ./
RUN npm i
COPY . .
RUN npm run build 

FROM node:20-alpine AS production
WORKDIR /usr/www/backend
COPY --from=build /usr/www/backend/package.json ./
RUN npm i --omit=dev
COPY --from=build /usr/www/backend/dist ./dist
COPY --from=build /usr/www/backend/public ./public
EXPOSE 3000
CMD ["node", "dist/main"]