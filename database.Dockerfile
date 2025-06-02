FROM postgres:latest

ENV POSTGRES_DB=school_management
ENV POSTGRES_USER=your_username
ENV POSTGRES_PASSWORD=your_password

COPY database.sql /docker-entrypoint-initdb.d/