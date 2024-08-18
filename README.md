# 🚀 React + TypeScript + Vite + MultiStep Form 🧑‍💻

This project provides a minimal setup to get started with React and TypeScript
using Vite. It also integrates multi-step form creation with `react-hook-form`
to simplify validation and management of complex forms.

## 📦 Packages Used

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static typing.
- **Vite**: A fast and optimized build tool for modern frontend development.
- **React Hook Form**: Utility for easy and performant form management.
- **Zod**: A TypeScript-first schema declaration and validation library.
- **TailwindCSS**: A utility-first CSS framework for rapid UI development.
- **ESLint**: A tool for identifying and fixing code issues.
- **Prettier Plugin TailwindCSS**: Plugin to ensure consistent Tailwind class
  organization.

## 🛠️ Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `dist` folder.\
The build is minified and optimized for the best performance.

### `npm run lint`

Runs ESLint to identify and fix code issues.

### `npm run preview`

Locally previews the production build.

## 🚀 Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/reactjs-multistepform-reacthookform.git
   cd reactjs-multistepform-reacthookform
   ```

2. **Install the dependencies:**

   ```bash
   npm install
   ```

3. **Run the project:**

   ```bash
   npm run dev
   ```

## 🧩 ESLint Configuration

If you want to expand the ESLint configuration to enable type-aware linting
rules, here is an example:

    ```js
    export default tseslint.config({
      languageOptions: {
        parserOptions: {
          project: ['./tsconfig.node.json', './tsconfig.app.json'],
          tsconfigRootDir: import.meta.dirname,
        },
      },
      plugins: {
        react,
      },
      rules: {
        ...react.configs.recommended.rules,
        ...react.configs['jsx-runtime'].rules,
      },
    })
    ```

## 🤝 Contributing

Contributions are welcome! Feel free to open issues and pull requests for
improvements and fixes.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file
for details.
