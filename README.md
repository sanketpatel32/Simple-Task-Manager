# 📝 Task Manager Web App

A full-stack Task Manager built with **React (Vite + Tailwind v4)** and **Node.js + Express + MongoDB**.  
Users can sign up, sign in, and manage tasks (CRUD) with authentication via **JWT**.

---

## 🔗 Deployment
https://taskmanagerfrontend-ho7pap6xu-sanketpatel32s-projects.vercel.app/

#### How to know if your backend is running?  
### 🔴 Inactive
![Inactive screenshot](image.png)

### 🟢 Active
![Active screenshot](image-1.png)

---

# 🚀 Features

## 🔐 Authentication
- Sign up and sign in endpoints implemented on backend  
- Passwords securely hashed  
- JWT used for session handling (stateless auth)  
- Authenticated users only can access their own tasks  
- Logout support on frontend  

## ✅ Task Management (CRUD)
- **Create** → Add tasks with title, description, due date, priority, and status (`todo`, `doing`, `done`)  
- **Read** → View all tasks belonging to the logged-in user  
- **Update** → Edit any field of a task (title, description, due date, priority, status)  
- **Delete** → Remove tasks owned by the user  

## 🖥️ Frontend (React + Vite + Tailwind v4)
- Single Page App with React Router for navigation  
- Pages: **Sign Up, Sign In, Task List, Task Editor**  
- Loading states and validation errors shown in UI  
- Tasks displayed with clean card layout (status badges, priority labels, due dates)  
- Reusable components (`FormInput`, `AuthLayout`, `ProtectedRoute`) for cleaner code  
- Fixed navbar with backend health check indicator  
- Minimal, modern scrollbar styling  

## ⚙️ Backend (Node.js + Express)
- REST API with proper HTTP methods and status codes  
- Endpoints for authentication and tasks  
- Centralized error handling middleware  
- Input validation for auth and tasks  
- Controllers separated from routes for clarity  

## 🗄️ Database (MongoDB / PostgreSQL)
- **MongoDB with Mongoose** (current implementation)  
- Tasks reference users (`user: ObjectId`) to ensure ownership  
- Alternative relational schema possible with PostgreSQL (`user_id` foreign key)  

## 🧪 Project Quality
- `.env.example` provided with required environment variables  
- Basic test included for backend endpoint (auth)  
- Clean project structure with separation of concerns  
- README with setup, run, and testing instructions  


---

## ⚙️ Setup & Run

### 1. Clone the repo
```bash
git clone https://github.com/your-username/task-manager.git
cd task-manager
```

### 2. Backend
```bash
cd backend
npm install
```

Create a `.env` file in **backend/** with:  
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=7d
```

Run backend:  
```bash
npm start
```

Backend will be running at:  
http://localhost:5000

---

### 3. Frontend
```bash
cd ../frontend
npm install
```

Create a `.env` file in **frontend/** with:  
```env
VITE_API_BASE=http://localhost:5000/api
```

Run frontend:  
```bash
npm run dev
```

Frontend will be running at:  
http://localhost:5173

---

## 🧪 Testing
- Backend: `npm test` 

---

## 🎨 Design Choices
- **Architecture** → Backend split into controllers, routes, middleware, models. Frontend split into pages, components, api.  
- **Authentication** → JWT chosen for simplicity + stateless auth. Token stored in `localStorage`.  
- **Database** → MongoDB chosen for flexibility; each task has a user reference.  
- **UI/UX** → Tailwind v4, reusable components, fixed navbar, clean task cards with badges, minimal scrollbar.  
- **Scalability** → ProtectedRoute wrapper, Axios API layer, centralized error handling.  

---

## 📜 License
MIT  

---
