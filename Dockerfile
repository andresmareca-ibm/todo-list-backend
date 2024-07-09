FROM node:20-slim AS development

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./tsconfig.json
RUN npm install

COPY . .
RUN npm run build

FROM node:20-slim

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY . .
COPY --from=development /app/dist ./dist

EXPOSE 3000

CMD /app/entrypoint.sh