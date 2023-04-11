import "./index.css"

const ExchangeRate = ({ currency, convertCurrencySelect }) => {
    const finalCurrency = currency / convertCurrencySelect;
    return (
        <p className="results">
            Exchange rate:
            <strong>
                {finalCurrency.toFixed(2)}
            </strong>
        </p>
    );
};

export default ExchangeRate;