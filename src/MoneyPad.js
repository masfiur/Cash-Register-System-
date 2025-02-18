function MoneyPad({ onMoneySelect }) {
  const moneyValues = [
    { value: 1, label: '$1' },
    { value: 5, label: '$5' },
    { value: 10, label: '$10' },
    { value: 20, label: '$20' },
  ];
  
  return (
    <div className="money-pad">
      <div className="money-buttons">
        {moneyValues.map(money => (
          <button
            key={money.value}
            onClick={() => onMoneySelect(money.value)}
            className="money-button"
          >
            {money.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MoneyPad;