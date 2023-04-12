import "./index.css"

const ExchangeRate = ({ result }) => {
    const finalCurrency = result.currencyFromRate / result.currencyToRate;
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