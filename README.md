# React Theme Switcher 🌗

A dynamic Light/Dark mode application built with React and Tailwind CSS. This project serves as a practical guide to **Global State Management**, featuring the Context API, custom hooks, and direct DOM manipulation for theming.

## 🚀 Features

- **Instant Theme Toggling:** Seamless switching between Light and Dark modes with a single click.
- **Global State:** Manages the theme state across the entire application without prop drilling.
- **Tailwind Integration:** Leverages Tailwind's `darkMode: 'class'` strategy to apply styles conditionally based on the HTML tag's class.
- **Card Component:** A responsive UI card that adapts its colors, background, and text instantly based on the active theme.

## 🛠️ Tech Stack

- **Library:** React JS
- **State Management:** Context API
- **Styling:** Tailwind CSS
- **Build Tool:** Vite

## 🧠 Concepts & Hooks Used

This project was built to master the `useContext` hook and global state patterns. Here is how the core concepts are applied:

- **`createContext`**: Used with **default values** (e.g., `{ themeMode: "light" }`). This provides better auto-completion (IntelliSense) in VS Code and acts as a safety net if the Provider is missing.
- **`ThemeProvider`**: A wrapper component that broadcasts the current `themeMode` and the toggle functions (`darkTheme`, `lightTheme`) to the entire component tree.
- **`useTheme`**: A custom hook created to wrap `useContext`. This simplifies imports in child components, allowing them to access theme data with one line of code.
- **`useEffect`**: The bridge between React state and the browser DOM. It listens for changes in `themeMode` and updates the `<html>` tag's class list accordingly.
- **`classList`**: Native JavaScript DOM manipulation (`document.querySelector('html').classList`) used inside the effect to physically add or remove the "dark" / "light" classes.
- **`Tailwind Configuration`**: Configured `darkMode: "class"` in `tailwind.config.js` to instruct Tailwind to look for a class on the HTML tag rather than user system preferences.

## 🖥️ Screenshots

**Light Mode View**
![Light Mode](./screenshots/light-mode.png)

**Dark Mode View**
![Dark Mode](./screenshots/dark-mode.png)

## 💻 How to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/umersaif11/react-theme-switcher.git
   ```

2. Navigate to the project directory
```bash
   cd react-theme-switcher
```    
3. Start the development server
```bash
   npm run dev
```  
   