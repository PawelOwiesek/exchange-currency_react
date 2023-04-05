import "./index.css"

const ExchangeRate = ({ currency, convertCurrency }) => {
    const finalCurrency = currency / convertCurrency;
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