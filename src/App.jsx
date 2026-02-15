import React, { useState, useEffect } from "react";
import ThemeToggle from "./components/ThemeToggle.jsx";
import NumberDisplay from "./components/NumberDisplay.jsx";
import RangeSelector from "./components/RangeSelector.jsx";
import GenerateButton from "./components/GenerateButton.jsx";

function App() {
  const [randomNumber, setRandomNumber] = useState(null);
  const [isDarkTheme, setIsDarkTheme] = useState(false); // Changed to false for light theme default
  const [minValue, setMinValue] = useState(1);
  const [maxValue, setMaxValue] = useState(100);

  // Apply theme to body
  useEffect(() => {
    document.body.className = isDarkTheme ? "" : "light-theme";
  }, [isDarkTheme]);

  const generateNumber = () => {
    if (minValue >= maxValue) {
      alert("Minimum value must be less than maximum value!");
      return;
    }

    const newNumber =
      Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    setRandomNumber(newNumber);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Random Number Generator</h1>
        <ThemeToggle isDarkTheme={isDarkTheme} onToggle={toggleTheme} />
      </header>

      <div className="main-content">
        <NumberDisplay number={randomNumber} />

        <RangeSelector
          minValue={minValue}
          maxValue={maxValue}
          onMinChange={setMinValue}
          onMaxChange={setMaxValue}
        />

        <GenerateButton
          onClick={generateNumber}
          hasGenerated={randomNumber !== null}
        />
      </div>
    </div>
  );
}

export default App;