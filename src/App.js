import { useState } from "react";
import Clock from "./Clock";
import Button from "./Button";
import Cash from "./Cash";
import SelectCurrencies from "./SelectCurrencies";
import RecalculateButton from "./RecalculateButton";
import ExchangeRate from "./ExchangeRate";
import Result from "./Result";
import SectionForm from "./SectionForm";
import Container from "./Container";
import { currencyValues } from "./currencies";

const CLOUDS_BACKGROUND_URL = `https://i.postimg.cc/j55CcnT5/ritam-baishya-ROVBDer29-PQ-unsplash.jpg`;
const MONEY_BACKGROUND_URL = `https://i.postimg.cc/8z4DYzW4/giorgio-trovato-Wyxq-Qpy-FNk8-unsplash.jpg`;
const DEFAULT_CURRENCY = currencyValues[0].currencyName;

function App() {
  const [image, setImage] = useState(CLOUDS_BACKGROUND_URL);
  const [currency, setCurrency] = useState(DEFAULT_CURRENCY);
  const [convertCurrency, setConvertCurrency] = useState(DEFAULT_CURRENCY);
  const [cashValue, setCash] = useState("");
  const [result, setResult] = useState("");

  const toggleImage = () => {
    setImage(prevImage => prevImage === CLOUDS_BACKGROUND_URL ? MONEY_BACKGROUND_URL : CLOUDS_BACKGROUND_URL);
  };

  const onSelectChange = ({ target }) => setCurrency(target.value);
  const onSecondSelectChange = ({ target }) => setConvertCurrency(target.value);
  const handleCashChange = ({ target }) => {
    setCash(target.value);
  };
  const convertCurrencyValue = currencyValues.find(({ currencyName }) => currencyName === convertCurrency).value
  const handleButtonClick = () => {
    const cashInput = +cashValue;
    const currencySelect = +currency;
    const result = ((cashInput * currencySelect) / convertCurrencyValue);
    setResult(result.toFixed(2) + " " + convertCurrency)
  };

  return (

    <Container image={image}>
      <Clock />
      <SectionForm
        title="Currency calculator"
        body={
          <>
            <Button toggleImage={toggleImage}
            />
            <Cash cashValue={cashValue}
              handleCashChange={handleCashChange}
            />
            <SelectCurrencies
              currency={currency}
              onSelectChange={onSelectChange}
              convertCurrency={convertCurrency}
              onSecondSelectChange={onSecondSelectChange}
            />
          </>}
        result={
          <>
            <RecalculateButton
              cashValue={cashValue}
              currency={currency}
              convertCurrency={convertCurrency}
              handleButtonClick={handleButtonClick}
            />
            < ExchangeRate currency={currency} convertCurrencyValue={convertCurrencyValue} />
            <Result result={result} />
          </>}
      />
    </Container>
  );
};

export default App;
