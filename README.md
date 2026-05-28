# 🌌 STRATA — Atmospheric Intelligence

> Editorial-grade meteorological precision, rendered beautifully.

**Strata** is a premium, high-aesthetic atmospheric intelligence application. Designed with modern typography, subtle micro-interactions, custom SVGs, and a tactile ceiling pull-cord physics-based theme switcher, it provides real-time global weather forecasts with uncompromised elegance.

---

## 📸 Interface Preview

### 1. Homepage
A cinematic entry portal initiating the atmospheric calibration process.
![Strata Homepage](screenshots/homepage.png)

### 2. Setup & Onboarding
An interactive terminal interface guiding the user through personalization and location settings with live API global verification.
![Strata Onboarding](screenshots/setup.png)

### 3. The Dashboard

#### Light Mode
Clean, premium glassmorphism styling utilizing high-contrast editorial layouts.
![Strata Dashboard Light Mode](screenshots/dashboard_light.png)

#### Dark Mode
Sleek, low-light aesthetic featuring glowing gradients and ambient dark backdrops.
![Strata Dashboard Dark Mode](screenshots/dashboard_dark.png)

---

## ✨ Features

- **Secured API Delivery:** A Vercel Serverless Function proxy (`/api/weather`) encapsulates your OpenWeather API credentials safely on the server side, preventing client-side key exposure.
- **Tactile Light/Dark Toggle:** An interactive, mechanical spring pull-chain mechanism dynamically transitions between dark mode and light mode with synthesized mechanical click audio.
- **Dual Development Architecture:** Seamlessly falls back to local direct fetching if run locally outside of a Vercel runtime environment.
- **Micro-Meteorological Panels:** Detailed tiles tracking temperature, wind velocity, astronomical cycles (sunrise/sunset), feels-like temps, humidity, pressure, and visibility.
- **Comprehensive Forecasts:** Multi-slot hourly tracking along with responsive 6-day summaries styled cleanly for mobile layout viewports.

---

## 🛠️ Setup & Deployment

### Local Development
To run the app locally without any server dependencies:
1. Double-click `index.html` to run directly in the browser, or serve it using any simple local server:
   ```bash
   npx serve .
   ```
2. The frontend automatically runs in fallback mode, calling OpenWeather directly using the built-in development credentials.

### Deploying to Vercel (Production Setup)
To host the app with secure API key protection:
1. Initialize git and push this repository to **GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initialize Strata app"
   ```
2. Open your **Vercel Dashboard** and click **Add New > Project**.
3. Import your GitHub repository.
4. Under **Environment Variables**, configure your secure production credential:
   - **Key:** `OPENWEATHER_API_KEY`
   - **Value:** *[Your OpenWeather API Key]*
5. Click **Deploy**. Vercel will automatically host the static frontend assets and spin up the backend proxy function in `/api/weather.js` seamlessly.
