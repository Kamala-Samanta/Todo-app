# ✅ To-Do App

A minimal and functional **To-Do List Web App** built using **Node.js, Express.js, EJS, and MySQL**. This app allows users to manage their daily tasks with ease — adding new tasks, marking them as done or pending, and deleting them, all backed by a robust RESTful API.

---

## 🚀 Features
- ➕ Add new tasks
- ✔️ Mark tasks as **Done** or **Pending**
- ❌ Delete tasks
- 📃 Task status auto-updated on page reload
- 📂 Data persisted using **MySQL database**
- 🧠 Server-side rendering using **EJS templates**

---

## 🔧 Tech Stack
- **Frontend:** EJS (Embedded JavaScript Templates), CSS
- **Backend:** Node.js, Express.js
- **Database:** MySQL

---

## 🔧 Installation

1. **Clone the repository**
```sh
git clone https://github.com/Kamala-Samanta/Todo-app.git
cd Todo-app
```

2. **Install dependencies**
```sh
npm install
```

3. **Configure environment variables**
- Create a `.env` file in the root
- Use `.env.example` as reference
```env
MYSQL_HOST='your_database_host'
MYSQL_USER='your_database_user'
MYSQL_PASSWORD='your_database_password'
MYSQL_DATABASE='your_database_name'
```

5. **Set up the database**
- If you don’t already have the database and tables set up, run the following SQL commands in your MySQL client:
```sql
CREATE DATABASE IF NOT EXISTS todo_db;

USE todo_db;

CREATE TABLE IF NOT EXISTS todo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    task VARCHAR(255) NOT NULL,
    status VARCHAR(15)
);
```

4. **Run the server**
```sh
npm run dev
```

5. **Visit in your browser**
```
http://localhost:8777/todo
```
---

## 📜 License
This project is open-source and available under the **MIT License**.

---
