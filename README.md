# 🌦️ Weather App

This is a robust and modern weather application built using Next.js. The app provides real-time weather updates for various cities around the world. It also includes a search functionality to get the weather for any city and sends email notifications if rain is forecasted for Cardiff.

## 📋 Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contact](#contact)

## 🌟 Features
- **Real-Time Weather Updates:** Get the current weather for predefined cities such as Cardiff, Nigeria, London, China, and the United States.
- **7-Day Weather Forecast:** View the weather forecast for the next seven days.
- **Search Functionality:** Search and retrieve weather data for any city worldwide.
- **Email Notifications:** Automatically receive an email notification if rain is expected in Cardiff.
- **Responsive Design:** The application is fully responsive and works seamlessly on all devices, including desktops, tablets, and mobile phones.
- **Dynamic Weather Display:** The app starts by showing Cardiff's weather by default but dynamically updates to display the searched city’s weather.

## 🛠️ Technologies Used
- ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white) - A React framework that provides server-side rendering, making the app fast and SEO-friendly.
- ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) - A utility-first CSS framework used for styling the app.
- ![OpenWeatherMap API](https://img.shields.io/badge/OpenWeatherMap-0078D7?style=for-the-badge&logo=openweathermap&logoColor=white) - A free weather API used to fetch weather data.
- ![Mailjet](https://img.shields.io/badge/Mailjet-111F2D?style=for-the-badge&logo=mailjet&logoColor=white) - An email service used to send weather alerts and notifications.
- ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) - Backend logic for handling API calls and sending emails.

## ⚙️ Setup Instructions

### Prerequisites
- Node.js installed on your local machine.
- A Mailjet account for sending emails.
- An OpenWeatherMap API key.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/weather-app.git
Navigate to the project directory:

bash
Copy code
cd weather-app
Install dependencies:

bash
Copy code
npm install
Create a .env.local file in the root directory and add your API keys:

bash
Copy code
NEXT_PUBLIC_OPENWEATHERMAP_API_KEY=your_openweathermap_api_key
MJ_APIKEY_PUBLIC=your_mailjet_public_key
MJ_APIKEY_PRIVATE=your_mailjet_private_key
Start the development server:

bash
Copy code
npm run dev
Build for production:

bash
Copy code
npm run build
Run the production build:

bash
Copy code
npm start
🚀 Usage
The homepage displays weather data for Cardiff by default.
Use the search bar to find weather data for any other city.
Rain alerts will be sent automatically via email if rain is forecasted in Cardiff.
📄 License
This project is licensed under the MIT License. See the LICENSE file for details.

📧 Contact
For any inquiries or issues, feel free to contact your-email@example.com.
