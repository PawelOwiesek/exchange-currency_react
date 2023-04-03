import "./index.css"

const ExchangeRate = ({ currency }) => (
    <p className="results">
        Exchange rate:
        <strong>
            {currency}
        </strong>
    </p>
);

export default ExchangeRate;