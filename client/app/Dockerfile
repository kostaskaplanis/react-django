# client/app/Dockerfile

FROM node:20-alpine

WORKDIR /app

# Force dev deps to be installed (like Vite)
ENV NODE_ENV=development

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 5173

RUN ls -la node_modules/.bin


CMD ["yarn", "run", "dev"]
