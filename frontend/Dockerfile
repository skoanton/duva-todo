# Använd en officiell Node.js-bild som bas
FROM node:18 as build

# Sätt arbetskatalogen
WORKDIR /app

# Kopiera package.json och package-lock.json
COPY package.json package-lock.json ./

# Installera beroenden
RUN npm install

# Kopiera resten av applikationen
COPY . .

# Exponera port 3000 (eller vilken port din frontend använder)
EXPOSE 3000

# Starta applikationen med npm run dev
CMD ["npm", "run", "dev"]