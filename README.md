# User Directory Application

A responsive React application that displays and manages user data from an external API. The application provides a professional user interface with a table-like layout and modal interaction for user details.

![User Directory Screenshot](https://via.placeholder.com/800x400?text=User+Directory+Screenshot)

## Features

- **User List Display**

  - Table-like layout showing user information in rows
  - Columns for name/email, address, phone, website, and company name
  - Proper column headers for each data field
  - Modern CSS styling with responsive design

- **User Detail Modal**

  - Detailed user information in a modal when a user is clicked
  - All available user data in an organized format
  - Map link using geo coordinates
  - Animated modal with proper UI for closing

- **User Management**
  - Client-side user deletion
  - Visual feedback for user interactions

## Technologies

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: CSS Modules
- **Testing**: Vitest + React Testing Library
- **Data Source**: JSONPlaceholder API

## Project Structure

```
src/
├── App.tsx                    # Main application component
├── user.model.ts              # TypeScript interfaces for user data
├── userDirectory.feature.tsx  # Main user directory feature component
├── userDirectory.module.css   # Styles for user directory
├── userDetailModal.component.tsx # User detail modal component
├── userDetailModal.module.css # Styles for modal
└── __tests__/                 # Test files
```

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/your-username/user-directory.git
   cd user-directory
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the development server

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal)

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production-ready application
- `npm run preview` - Preview the production build locally
- `npm test` - Run tests

## Testing

This project uses Vitest and React Testing Library for testing. Tests follow these principles:

- Use of TypeScript with strict typing
- Component tests for user interactions
- Integration tests for data flow
- Mocking external API calls

Run tests with:

```bash
npm test
```

Run tests with coverage:

```bash
npm test -- --coverage
```

## Test Rules

- Write all tests in TypeScript, using strict typing
- Use camelCase and FSD conventions for test file names
- Use meaningful, descriptive names for test cases
- Prefer integration tests for user flows, unit tests for pure logic
- Mock all network requests
- Use React Testing Library queries for accessibility
- Ensure tests are isolated and deterministic

## Future Improvements

- Add form for creating new users
- Implement filtering and sorting
- Add pagination for large data sets
- Implement state management for larger applications
- Add authentication

## License

MIT

---

This project was created using React + TypeScript + Vite.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
