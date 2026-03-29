# AWS DVA-C02 Quiz App 🚀

A modern, fast, and fully responsive practice exam simulator for the **AWS Certified Developer - Associate (DVA-C02)** certification. Built with React, Tailwind CSS v4, Zustand, and Vite.

## 🎯 Features

- **Full Exam Simulation**: Experience a realistic 65-question mock exam covering all 4 DVA-C02 domains (Development, Security, Deployment, Troubleshooting & Optimization).
- **Practice Mode**: Learn as you go. Get immediate feedback and detailed explanations with official AWS documentation links for every question.
- **Detailed Analytics**: View comprehensive results broken down by exam domain to identify your strengths and focus areas.
- **Save Progress**: Exam state is saved locally. Close the tab and pick up exactly where you left off.
- **Dark/Light Mode**: First-class support for both dark and light themes, natively integrated with Tailwind CSS v4.
- **Mobile Responsive**: Study on-the-go with a fully responsive mobile design.

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS v4
- **State Management**: Zustand
- **Charting**: Recharts
- **Icons**: Lucide React
- **Build Tool**: Vite

## 🚀 Getting Started

### Prerequisites

- Node.js (v20 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/aws-quiz-app.git
   cd aws-quiz-app
   ```

2. Install dependencies:
   ```bash
   yarn install
   # or
   npm install
   ```

3. Start the development server:
   ```bash
   yarn dev
   # or
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## 📦 Deployment

This project is configured with a GitHub Actions CI/CD pipeline (`.github/workflows/deploy.yml`) to automatically build and deploy the application to **GitHub Pages** whenever changes are pushed to the `main` branch.

To trigger the deployment:
1. Commit your changes and push to `main`.
2. The GitHub Action will automatically install dependencies, build the static export, and deploy the application.

## 📚 Exam Domains Covered

1. **Development with AWS Services** (32%)
2. **Security** (26%)
3. **Deployment** (24%)
4. **Troubleshooting and Optimization** (18%)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📝 License

This project is open-source and available under the MIT License.
