import "./index.css"

const ExchangeRate = ({ currency, convertCurrencyValue }) => {
    const finalCurrency = currency / convertCurrencyValue;
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