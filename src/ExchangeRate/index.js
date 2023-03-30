import "./index.css"

const ExchangeRate = ({ currency }) => (
    <p className="calculator__form--paragraph">
        Exchange rate:<strong
            className="calculator__form--rate"
        >{currency}</strong>
    </p>
);

export default ExchangeRate;