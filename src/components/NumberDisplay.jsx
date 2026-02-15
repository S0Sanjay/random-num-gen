import React from 'react';

const NumberDisplay = ({ number }) => {
  return (
    <div className="card number-display-card">
      <div className="number-container">
        {number !== null ? (
          <>
            <div className="number-glow"></div>
            <div className="generated-number">{number}</div>
          </>
        ) : (
          <div className="placeholder">
            <div className="placeholder-icon">🎲</div>
            <div className="placeholder-text">Ready to Generate</div>
            <div className="placeholder-subtext">
              Click the button below to create your random number
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NumberDisplay;
