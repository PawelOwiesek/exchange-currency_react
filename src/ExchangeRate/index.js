import "./index.css"

const ExchangeRate = ({ result }) => {

    let finalCurrency = result.currencyFromRate / result.currencyToRate;
    if (result === "") {
        finalCurrency = 0
    }

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