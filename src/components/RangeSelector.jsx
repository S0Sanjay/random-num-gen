import React from "react";

function RangeSelector({ minValue, maxValue, onMinChange, onMaxChange }) {
  return (
    <div className="card">
      <h2>Range Settings</h2>
      <div className="range-inputs">
        <div className="input-group">
          <label>Minimum</label>
          <input
            type="number"
            value={minValue}
            onChange={(e) => onMinChange(Number(e.target.value))}
          />
        </div>
        <div className="input-group">
          <label>Maximum</label>
          <input
            type="number"
            value={maxValue}
            onChange={(e) => onMaxChange(Number(e.target.value))}
          />
        </div>
      </div>
      <div className="range-display">
        <div className="range-display-text">Current Range</div>
        <div className="range-display-numbers">
          {minValue} - {maxValue}
        </div>
      </div>
    </div>
  );
}

export default RangeSelector;