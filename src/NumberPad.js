function NumberPad({ selectedNumbers, onNumberSelect }) {
    const numbers = [];
    for (let i = 1; i <= 20; i++) {
      numbers.push(i);
    }
  
    return (
      <div className="number-pad">
        <div className="number-grid">
          {numbers.map(number => (
            <button
              key={number}
              className={`number-button ${selectedNumbers.includes(number) ? 'selected' : ''}`}
              onClick={() => onNumberSelect(number)}
            >
              {number}
            </button>
          ))}
        </div>
      </div>
    );
  }

export default NumberPad;