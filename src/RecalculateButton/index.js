import "./index.css";

const RecalculateButton = ({ cashValue, currency, convertCurrency }) => {
    const calculateResult = () => {
        const cashInput = +cashValue;
        const currencySelect = +currency;
        const convertCurrencySelect = +convertCurrency;
        const result = ((cashInput * currencySelect) / convertCurrencySelect);
        console.log(cashInput);
        console.log(currency);
        console.log(convertCurrency);
        console.log(result);
    }

    return (
        <button onClick={calculateResult} className="calculator__form--button">Recalculate</button>
    );

}

export default RecalculateButton;