# Använd den officiella PostgreSQL-bilden som bas
FROM postgres:latest

# Kopiera din init.sql-fil till en plats där PostgreSQL kan köra den vid start
COPY init.sql /docker-entrypoint-initdb.d/

# Eventuellt kan du ställa in miljövariabler för att konfigurera databasens användare och namn
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=password
ENV POSTGRES_DB=todoapp