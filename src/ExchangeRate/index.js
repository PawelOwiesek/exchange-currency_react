import "./index.css"

const ExchangeRate = ({ convertCurrency }) => (
    <p className="calculator__form--paragraph">
        Exchange rate:<strong
            className="calculator__form--rate"
        >{convertCurrency}</strong>
    </p>
);

export default ExchangeRate;