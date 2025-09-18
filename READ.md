# 📝 Task Manager Web App

A full-stack Task Manager built with **React (Vite + Tailwind v4)** and **Node.js + Express + MongoDB**.  
Users can sign up, sign in, and manage tasks (CRUD) with authentication via **JWT**.

---

## 🚀 Features
- Secure authentication with JWT  
- Protected routes (only logged-in users can access tasks)  
- Task CRUD (title, description, due date, priority, status)  
- Responsive UI with Tailwind CSS v4  
- Modular backend (controllers, routes, middleware, models)  
- Axios API integration on frontend  
- Fixed navbar with backend status indicator  
- Minimal, modern custom scrollbar  

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
- Frontend: `npm test`  

---

## 🎨 Design Choices
- **Architecture** → Backend split into controllers, routes, middleware, models. Frontend split into pages, components, api.  
- **Authentication** → JWT chosen for simplicity + stateless auth. Token stored in `localStorage`.  
- **Database** → MongoDB chosen for flexibility; each task has a user reference.  
- **UI/UX** → Tailwind v4, reusable components, fixed navbar, clean task cards with badges, minimal scrollbar.  
- **Scalability** → ProtectedRoute wrapper, Axios API layer, centralized error handling.  

---

## ✅ Future Improvements
- Task filters + search  
- Dark mode  
- Role-based access control  
- Docker + CI/CD for deployment  

---

## 📜 License
MIT  
