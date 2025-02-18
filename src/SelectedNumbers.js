function SelectedNumbers({ numbers, moneyValue }) {
  return (
    <div className="selected-numbers">
      <h2>Numbers Selected</h2>
          {numbers.length > 0 && (
      <div className="numbers-container">
        <ul>
          {numbers.map(number => (
            <li key={number}>{number}</li>
          ))}
        </ul>
      </div>
    )}
      
      {numbers.length === 5 && (
        <div className="money-display">
          <h3>Total</h3>
          <p>${moneyValue.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}


export default SelectedNumbers;