# 🎫 Ticket System

A full-stack ticket management app built with React, FeathersJS, and PostgreSQL.

This project is organized as a monorepo with separate frontend and backend applications.

---

## 📦 Tech Stack

- **Frontend:** React, styled-components, Ant Design  
- **Backend:** FeathersJS, PostgreSQL  
- **Monorepo structure:** `apps/frontend`, `apps/backend`

---

### Requirements

- **Node.js** >= 20.x
- **PostgreSQL** >= 13
--


#### 🚀 Getting Started

##### 1. Clone the repository

```bash
git clone https://github.com/ArturKhachatryan13/Digilite.git
cd ticket-system

npm install
cd apps/backend && npm install
cd apps/frontend && npm install

Create the PostgreSQL Database
    psql -U postgres
    CREATE DATABASE tickets_db;

Replace tickets_db with the name you use in your .env file.



In the apps/backend directory, create a .env file with the following content: 
DATABASE_URL=postgres://user:password@localhost:5432/tickets_db
Replace user, password, and tickets_db with your local PostgreSQL credentials. 

ex(DATABASE_URL=postgres://postgres:123456@localhost:5432/backend)

Run database migrations

    cd apps/backend
    npm run migrate


Run development servers

    cd apps/backend
    npm run dev

    cd apps/frontend
    npm run dev

