# Använd en officiell Node.js-bild som bas
FROM node:14

# Sätt arbetskatalogen
WORKDIR /app

# Kopiera package.json och package-lock.json
COPY package*.json ./

# Installera beroenden med --legacy-peer-deps flaggan
RUN npm install --legacy-peer-deps

# Kopiera resten av applikationen
COPY . .

# Bygg applikationen
RUN npm run build

# Exponera port 3000
EXPOSE 3000

# Starta applikationen
CMD ["npm", "start"]