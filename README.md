# 💱 Currency Converter

A responsive and interactive currency converter web application built with **React** and **Tailwind CSS**. It allows users to convert between different currencies using real-time exchange rates.

### 🌐 [Live Demo →](https://mohammadzaid07.github.io/currency-convertor/)

## 🚀 Features

- 🌍 Convert between over 160 international currencies
- 🔄 Swap "From" and "To" currencies with a single click
- 💰 Accurate conversion using real-time exchange rates
- 💡 Intelligent UI updates (e.g., swap updates input instantly)
- 📱 Fully responsive design
- ✨ Modern UI using Tailwind CSS

## 🛠️ Tech Stack

- **React** – UI library
- **Tailwind CSS** – Utility-first CSS framework
- **Vite** – Frontend tooling
- **Custom Hooks** – To fetch and manage API data

## 📁 Project Structure

currency-converter/

├── public/

├── src/

│   ├── components/

│   │   └── InputBox.jsx        # Custom reusable input component

│   ├── hooks/

│   │   └── useCurrencyInfo.js  # Custom hook to fetch exchange rates

│   ├── App.jsx                 # Main application component

│   ├── main.jsx                # App entry point

│   ├── index.css               # Tailwind CSS config

│   └── App.css                 # Optional styles (can be empty)

├── index.html

├── package.json

└── vite.config.js

## 🔧 Installation & Setup

To run this project locally:

```bash
# 1. Clone the repository
git clone https://github.com/mohammadzaid07/currency-convertor.git

# 2. Navigate to the project folder
cd currency-converter

# 3. Install dependencies
npm install

# 4. Run the development server
npm run dev
The app will be live at http://localhost:5173
```

## 🧪 How It Works

* Users select source and target currencies and enter the amount.
* The app uses a custom hook (`useCurrencyInfo`) to fetch real-time exchange rates.
* Upon clicking  **Convert** , the converted amount is displayed.
* The **Swap** button reverses the currency types and updates input values intelligently.

## 🚀 Deployment

To deploy the app:

```
Build the application
npm run build
```

Then, deploy the `dist/` folder to a platform like  **Vercel** ,  **Netlify** , or  **GitHub Pages** .
