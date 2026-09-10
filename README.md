# 🎓 Course Portal

A modern and responsive **Course Portal** built with React and Tailwind CSS.  
The application allows users to browse courses, view detailed course information, and manage courses through an admin interface.

The project uses a local `Database.json` file as a simple data source instead of a separate backend server.

---

## 🚀 Features

### 👤 User Features

- View all available courses
- View detailed course information
- View course duration and trainer details
- View course pricing
- Add courses to cart
- User login
- Responsive design for desktop, tablet, and mobile

### 🛠️ Admin Features

- Add new courses
- Update existing courses
- Delete courses
- Manage course information
- Admin-specific controls

---

## 🧑‍💻 Technologies Used

### Frontend

- **React.js**
- **React Router DOM**
- **Tailwind CSS**
- **Vite**
- **JavaScript (ES6+)**
- **Context API**
- **HTML5**
- **CSS3**

### Data Source

- **JSON Server / Database.json**
- Local JSON file is used to store course and user data.

---

## 📁 Project Structure

```text
course_portal/
│
├── backend/
│   └── Database.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   └── ...
│   │
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   └── README.md
│
├── .gitignore
└── README.md
