# Todo List Frontend

This is the frontend application for a simple Todo List, built with Angular. It allows users to manage their tasks, including adding, viewing, editing, deleting, and marking tasks as complete. This frontend is designed to connect to a backend API (you'll need to set up your backend separately for full functionality).

## 🚀 Installation

To run this frontend application locally, follow these steps:

### 1️⃣ Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js and npm (Node Package Manager):** Angular requires Node.js to run. You can download and install Node.js from [here](https://nodejs.org/). npm usually comes bundled with Node.js.
- **Angular CLI (Command Line Interface):** The Angular CLI is used to create, manage, and build Angular projects. If you haven't installed it globally yet, you can do so using npm:

  ```bash
  npm install -g @angular/cli
  ```

### 2️⃣ Clone the Repository

Clone this repository to your local machine using Git:

```bash
git clone https://github.com/will-developer/todo-frontend.git
```

### 3️⃣ Navigate to the Project Directory

Change your current directory in the terminal to the cloned project folder:

```bash
cd todo-frontend
```

### 4️⃣ Install Dependencies

Install the project's dependencies using npm. This command reads the `package.json` file and downloads all necessary packages:

```bash
npm install
```

### 5️⃣ Run the Development Server

Start the Angular development server. This will build the application and serve it locally, allowing you to view it in your browser:

```bash
ng serve
```

### 6️⃣ Access the Application

Once the `ng serve` command is finished compiling and bundling, you can access the Todo List frontend in your web browser at:

🔗 [http://localhost:4200/](http://localhost:4200/)

The application should now be running in your browser. You can start adding, editing, and managing your tasks! ✅

---

## 🔗 Backend Integration

This frontend application is designed to communicate with a backend API. Ensure your backend API is running and accessible at the URL configured in:

📂 `src/app/services/task.service.ts` (currently set to `http://localhost:8000/api/tasks/`)

You will need to set up and run your backend separately for the full Todo List functionality to work, including persisting tasks and fetching them from a database.

### 🖥️ Backend Repository:

[Todo Backend (Django)](https://github.com/will-developer/todo-backend-django)

---
