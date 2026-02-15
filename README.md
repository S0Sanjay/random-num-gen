# 🎲 Random Number Generator

A beautiful and responsive Random Number Generator built with React. Features an attractive dual-theme design with custom range selection.

## 🌟 Features

- **Random Number Generation**: Generate random numbers within a custom range
- **Custom Range Selection**: Set your own minimum and maximum values
- **Dual Theme System**: 
  - Light Theme (Default): Attractive coral/pink gradient design
  - Dark Theme: Modern purple/violet aesthetic
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Clean UI**: Modern, minimalist interface with smooth animations

## 🎨 Design Highlights

- **CSS Root Variables**: Using CSS custom properties (`:root` variables) for theme management - **this is my first time implementing this approach** for easy theme switching!
- **Solid Colors**: No gradients in components, clean solid color scheme
- **Hover Effects**: Interactive border color changes on hover
- **Smooth Animations**: Number appearance animation

## 🚀 Live Demo

[[View Live Demo](https://random-num-gen-eight.vercel.app/)

### Light Theme (Default)
Beautiful coral/red gradient with smooth interactions

### Dark Theme
Modern purple/violet aesthetic

## 🛠️ Technologies Used

- **React 18** - UI Library
- **Vite** - Build Tool
- **CSS3** - Styling with CSS Variables
- **Google Fonts** - Orbitron & Rajdhani fonts

## 📦 Installation

1. Clone the repository
```bash
git clone https://github.com/S0Sanjay/random-num-gen.git
```

2. Navigate to project directory
```bash
cd random-num-gen
```

3. Install dependencies
```bash
npm install
```

4. Start development server
```bash
npm run dev
```

5. Open browser at `http://localhost:5173`

## 🎯 Usage

1. **Set Range**: Enter minimum and maximum values
2. **Generate**: Click the "Generate Random Number" button
3. **Theme Toggle**: Click the theme button to switch between light and dark modes

## 📂 Project Structure

```
random-num-gen/
├── public/
├── src/
│   ├── components/
│   │   ├── ThemeToggle.jsx      # Theme switcher component
│   │   ├── NumberDisplay.jsx    # Number display component
│   │   ├── RangeSelector.jsx    # Range input component
│   │   └── GenerateButton.jsx   # Generate button component
│   ├── App.jsx                  # Main application component
│   ├── main.jsx                 # Entry point
│   └── styles.css               # Global styles with CSS variables
├── package.json
└── README.md
```

## 🎨 CSS Variables Implementation

This project uses CSS root variables for theme management - **my first time using this approach!** 

The implementation allows for easy theme switching:

```css
:root {
  --primary: #520380;
  --accent: #A855F7;
  --bg-dark: #11001C;
  /* ... more variables */
}

.light-theme {
  --primary: #E63946;
  --accent: #FF6B6B;
  --bg-dark: #FFFFFF;
  /* ... theme overrides */
}
```

This approach makes theme management much cleaner and more maintainable compared to traditional methods!

## 🌈 Color Schemes

### Dark Theme
- Primary: Purple `#520380`
- Accent: Bright Purple `#A855F7`
- Background: Deep Purple `#11001C`
- Hover: `#A855F7`

### Light Theme
- Primary: Coral Red `#E63946`
- Accent: Bright Coral `#FF6B6B`
- Background: Gradient Pink `#FFF5F5` to `#FFE8E8`
- Hover: `#FF6B6B`

## 📱 Responsive Design

- **Desktop**: Optimal layout with spacious components
- **Tablet (768px)**: Adjusted spacing and font sizes
- **Mobile (480px)**: Compact layout for smaller screens

## 🚀 Deployment

### Deploy to GitHub Pages

1. Install gh-pages
```bash
npm install --save-dev gh-pages
```

2. Add to package.json
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy
```bash
npm run deploy
```

## 👨‍💻 Author

**Sanjay**
- GitHub: [@S0Sanjay](https://github.com/S0Sanjay)

---

⭐ If you find this project useful, please consider giving it a star!
