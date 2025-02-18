import React from 'react';


function Buttons({ onClear, onRandom, onCash }) {
  return (
    <div className="buttons">
      <button onClick={onClear} className="button clear">Clear</button>
      <button onClick={onRandom} className="button random">Random</button>
      <button onClick={onCash} className="button cash">Cash</button>
    </div>
  );
}

export default Buttons;