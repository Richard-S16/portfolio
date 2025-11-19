# Richard Schmidt - Personal Portfolio

This is a personal portfolio website built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS v4**. It showcases my professional experience, skills, education, and projects in a clean and modern interface.

## 🚀 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Package Manager:** npm

## ✨ Features

- **Data-Driven Content:** All portfolio data (personal info, experience, skills) is managed in a structured TypeScript file (`src/data/portfolio.ts`) for easy updates.
- **Responsive Design:** Fully responsive layout optimized for mobile, tablet, and desktop.
- **Modern UI:** Clean and professional design using Tailwind CSS.
- **Sections:**
  - **Hero:** Introduction and summary.
  - **Experience:** Professional work history.
  - **Education:** Academic background.
  - **Skills:** Technical skills and languages.

## 📂 Project Structure

```text
src/
├── app/              # Next.js App Router pages and layout
├── components/       # Reusable UI components (Hero, Experience, etc.)
├── data/             # Static data for the portfolio content
└── ...
```

## 🛠️ Getting Started

Follow these steps to run the project locally:

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Richard-S16/portfolio.git
   cd portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Running Development Server

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## 📝 Customization

To update the content of the portfolio, simply edit the `src/data/portfolio.ts` file. The components will automatically render the updated data.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
