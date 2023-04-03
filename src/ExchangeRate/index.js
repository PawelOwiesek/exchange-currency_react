import "./index.css"

const ExchangeRate = ({ convertCurrency }) => (
    <p className="results">
        Exchange rate:
        <strong>
            {convertCurrency}
        </strong>
    </p>
);

export default ExchangeRate;