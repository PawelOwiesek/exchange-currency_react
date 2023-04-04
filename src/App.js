import { useState } from "react";
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
const DEFAULT_CURRENCY = currencyValues[0].id;

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

  const handleButtonClick = () => {
    const cashInput = +cashValue;
    const currencySelect = +currency;
    const convertCurrencySelect = +convertCurrency;
    const result = ((cashInput * currencySelect) / convertCurrencySelect);
    setResult(result.toFixed(2))
  };

  return (

    <Container image={image}>
      <Button toggleImage={toggleImage}
      />
      <SectionForm
        title="Currency calculator"
        body={
          <>
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
            < ExchangeRate convertCurrency={convertCurrency} />
            <Result result={result} />
          </>}
      />
    </Container>
  );
};

export default App;
