# 🏡 Real Estate Property Finder

A responsive real estate web application built with **React + Tailwind CSS + Firebase**.  
The app allows users to browse, search, and save properties for rent or sale.

---

## 🚀 Features
- 🔍 Search properties by location  
- 🏠 Browse featured properties  
- ⭐ Save properties for later  
- 📱 Fully responsive (mobile, tablet, desktop)  
- 🔐 Firebase Authentication  

---

## ⚙️ Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/real-estate-app.git
   cd real-estate-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Setup Environment Variables**
   - Create a `.env` file in the root directory:
     ```bash
     touch .env
     ```
   - Add your Firebase credentials:
     ```env
     VITE_FIREBASE_API_KEY=your_api_key
     VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
     VITE_FIREBASE_PROJECT_ID=your_project_id
     VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
     VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
     VITE_FIREBASE_APP_ID=your_app_id
     ```

4. **Run the Development Server**
   ```bash
   npm run dev
   ```

5. Open in browser:
   ```
   http://localhost:5173
   ```

---

## 🔥 Firebase Setup Steps

1. Go to [Firebase Console](https://console.firebase.google.com/).  
2. Click **Add Project** and follow the instructions.  
3. Go to **Project Settings → General → Your apps**.  
4. Choose **Web App** and register your app.  
5. Copy the Firebase config and paste it inside your `.env` file.  
6. Enable required services:
   - **Authentication** → Enable Email/Password (or Google Sign-In).  
   - **Firestore Database** → Create a database in test mode.  
   - **Storage** (optional, if you want to upload property images).  

---

## 📸 Screenshots

### 🏠 Home Page
![Home Page](screenshots/home.png)

### 🔑 Login / Register
![Login](screenshots/login.png)

---

## 📦 Tech Stack
- **Frontend:** React, Tailwind CSS  
- **Backend:** Firebase (Auth, Firestore, Hosting)  
- **Icons:** React Icons  

---

## 🤝 Contributing
Contributions are welcome! Please fork this repo and create a pull request.

---

## 📜 License
This project is licensed under the **MIT License**.
