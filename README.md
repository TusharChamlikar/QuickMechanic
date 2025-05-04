# 🚗 Quick Mechanic

The app connects shared vehicle owners, including small fleet operators and individual drivers, with trusted mechanics for on-demand repairs and scheduled maintenance. It helps reduce vehicle breakdowns, ride cancellations, and downtime. The platform offers cost-effective, timely, and efficient repair services. Through location-based features, users can easily find nearby mechanics. By improving vehicle reliability, the app enhances service quality and supports the earnings of small-scale operators. It also has OTP-BASED User authentication feature.

This project uses:
- 🖥️ **React + Vite** for the frontend
- ⚙️ **Spring Boot** for the backend API
- 🤖 **Python (Flask)** for the Machine Learning model integration

---

## 📁 Project Structure


---

## 🚀 How to Run the Project

All three components should run simultaneously.

### 1️⃣ Start the Frontend (React + Vite)

```bash
cd front-end
npm install       # Install dependencies
npm run dev       # Start the frontend server
```
### 2 Start BACKEND(SPRINGBOOT)
```bash
cd backend
cd demo
mvn spring-boot:run
```

###3 Start ML MODEL (FLASK)
```
cd ml
cd other
python predict.py
```

📦 API and Frontend Integration
The React frontend calls the Spring Boot backend for authentication, user interaction, and service requests.

The Spring Boot backend communicates with the Flask ML service for predictions and recommendations.

🧠 Features
 -  🔐 OTP-based user authentication (via email/SMS)
📍 Find nearby mechanics

📅 Schedule service appointments

🧠 ML model to predict issues based on user input

🔒 Secure backend with Spring Boot

⚡ Fast, responsive UI with React and Vite

👨‍💻 Developer
Made by Tushar Chamlikar



