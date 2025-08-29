# Microservice Project - NestJS + Kafka + gRPC + TypeORM + PostgreSQL

This project demonstrates a microservice architecture built with **NestJS**, using:
- **gRPC** for inter-service communication
- **Kafka** as an Event-Driven Architecture (EDA) message broker
- **TypeORM** with **PostgreSQL** for persistence
- **Nodemailer** for email notifications
- **Docker** to run Kafka and Zookeeper

---

## **Services**
### 1. User Service
- Exposes gRPC API to create and fetch users.
- Publishes `created_user` event to Kafka after a new user is created.
- Uses PostgreSQL to store user data.

### 2. Notification Service
- Consumes `created_user` events from Kafka.
- Sends welcome emails to users.
- Persists notifications in PostgreSQL.

---