# Example Store App

> This project is part of my **frontend learning portfolio focused on React and Tailwind CSS**. 

A responsive store application built with React, Vite, and Tailwind CSS. This app allows users to log in, view a list of products, and access detailed views of each product. It demonstrates a complete login flow with form validation, protected routes, and toast notifications. The project integrates the API from [dummyjson.com](https://dummyjson.com/) to simulate user authentication and manage product data. Built as a practice exercise, this app offers an example of how to implement a simple store with user authentication and product browsing functionality.

---

## 📑 Table of Contents

- [Project Structure](#project-structure)
- [Features](#features)
- [Installation](#installation)
- [Usage](#how-to-use-this-project)
- [Authentication](#authentication)
- [Requirements](#requirements)
- [Contribution](#contribution)
- [Learn More](#learn-more)

---

## Project Structure

```
react-login/
├── public/               # Public static files
├── src/                  # Main source code
│   ├── api.js            # Mock API logic
│   ├── assets/           # Resource files (images)
│   ├── components/       # Reusable components
│   ├── hooks/            # Custom React hooks
│   ├── layouts/          # Layout structures
│   ├── pages/            # Main pages of the app
│   ├── index.css         # Global styles for app
│   ├── main.jsx          # React entry point
├── index.html            # Main HTML file
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.cjs    # PostCSS configuration
├── vite.config.js        # Vite configuration
└── README.md             # Project documentation

```

## Features

- Protected routes
- Form validation with `react-hook-form`
- Session persistence with `localStorage`
- Toast notifications using `sonner`
- Responsive design with `Tailwind CSS`

---

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/LSCasas/react-login.git
   cd react-login
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

---

## How to Use This Project

Start the development server:

```bash
npm run dev
```

Then, open your browser and navigate to :

```
http://localhost:5173
```

---

---

## Authentication

### Login Process:

To log in, use the credentials of a sample user from the API — for example:

**Username:** `emilys`  
**Password:** `emilyspass`

If the credentials are incorrect, the app will show the following:

- A toast notification with the message: "Incorrect username or password."
- An inline error message within the form that says: "Invalid credentials."

### Security Note:

User session data is stored in `localStorage` for simplicity. In a production environment, this is not recommended due to security risks like `XSS attacks`. For better security, use `HttpOnly cookies` to store tokens. Since this is a portfolio project and not handling real sensitive data, these security measures are not fully implemented.

## Requirements

- Node.js >= 18
- npm

---

## Contribution

If you want to contribute to this project, follow the steps below:

1. Fork the repository.

2. Create a new branch for your feature:

   ```bash
   git checkout -b feature/new-feature
   ```

3. Make your changes.

4. Commit your changes:

   ```bash
   git commit -am 'Add new feature'
   ```

5. Push your changes to your fork:

   ```bash
   git push origin feature/new-feature
   ```

6. Create a Pull Request for your changes to be reviewed and merged into the main project.

---

## Learn More

To learn more about the tools and libraries used in this project, check out the following resources:

- [React Documentation](https://react.dev/) – Learn about building user interfaces with React.
- [React Router Documentation](https://reactrouter.com/) – Learn how to handle routing in single-page applications.
- [Tailwind CSS Documentation](https://tailwindcss.com/) – Learn how to style modern web apps with utility-first CSS.
- [Vite Documentation](https://vitejs.dev/) – Learn about the fast frontend tooling used to build and serve the app.

Your feedback and contributions to this project are welcome!
