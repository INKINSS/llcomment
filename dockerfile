FROM node:latest
WORKDIR /home/app

COPY . .

RUN npm install -g pnpm
RUN pnpm install

RUN npm run build

# ENV HOST=0.0.0.0
# ENV PORT=4321
EXPOSE 4321
CMD ["npm", "run","dev","start"]