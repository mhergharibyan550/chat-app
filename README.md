# 💬 ChatAPP

**ChatAPP** is a real-time messaging web application built using **React**, **Vite**, **NodeJS**, and **ExpressJS**. It features socket-based communication powered by **Socket.IO**, providing users with a smooth and interactive chat experience.

**Note:** _This website was built solely for learning purposes and is not intended for real-world use. Please do not enter any personal or sensitive information._

![ChatAPP Preview](https://i.ibb.co/hFfpsbkJ/chatapp-preview.png)

---

## 🛠️ Setup Instructions

1. Clone the repository:

```
git clone https://github.com/mhergharibyan550/chat-app.git
```

2. Install all dependencies:

```
npm run install:all
```

This installs dependencies for both frontend and backend. There are also the following versions:

```
npm run install:client // Only Frontend Depencies
npm run install:server // Only Backend Depencies
```

3. Review `.env.example` and create a `.env` file in the root directory with the required values.

---

## 🚀 Running the App

### For Production

1. Navigate to the root directory and build the project:

```
npm run build
```

2. Start the application:

```
npm run start
```

3. Open your browser and visit:
   http://localhost:5000

### For Development

1. Navigate to the root directory and start the project:

```
npm run dev:all    // Both Frontend and Backend
npm run dev:client // Only Frontend
npm run dev:server // Only Backend
```

2. Open your browser and visit http://localhost:3000 for frontend. Backend is running on PORT `5000`.

---
