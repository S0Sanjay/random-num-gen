import React from 'react';

const GenerateButton = ({ onClick, hasGenerated }) => {
  return (
    <button className="generate-button" onClick={onClick}>
      {hasGenerated ? '🎯 Generate New Number' : '🚀 Generate Random Number'}
    </button>
  );
};

export default GenerateButton;
