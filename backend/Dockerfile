# Använd en officiell Go-bild som bas
FROM golang:1.23

# Sätt arbetskatalogen
WORKDIR /app

# Kopiera go.mod och go.sum
COPY go.mod go.sum ./

# Ladda ner beroenden
RUN go mod download

# Kopiera resten av applikationen
COPY . .

# Kopiera wait-for-it.sh till arbetskatalogen
COPY wait-for-it.sh /app/wait-for-it.sh

# Gör wait-for-it.sh exekverbart
RUN chmod +x /app/wait-for-it.sh

# Bygg applikationen
RUN go build -o main .

# Exponera port 8080 (eller vilken port din backend använder)
EXPOSE 8080

# Starta applikationen
CMD ["./main"]