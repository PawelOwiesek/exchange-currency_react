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

const CLOUDS_BACKGROUND_URL = "https://i.postimg.cc/j55CcnT5/ritam-baishya-ROVBDer29-PQ-unsplash.jpg";
const MONEY_BACKGROUND_URL = "https://i.postimg.cc/8z4DYzW4/giorgio-trovato-Wyxq-Qpy-FNk8-unsplash.jpg";
const DEFAULT_CURRENCY = currencyValues[0].currencyName;

function App() {
  const [image, setImage] = useState(CLOUDS_BACKGROUND_URL);
  const [currencyFrom, setCurrencyFrom] = useState(DEFAULT_CURRENCY);
  const [currencyTo, setCurrencyTo] = useState(DEFAULT_CURRENCY);
  const [cashValue, setCash] = useState("");
  const [result, setResult] = useState("");

  const toggleImage = () => {
    setImage(prevImage => prevImage === CLOUDS_BACKGROUND_URL ? MONEY_BACKGROUND_URL : CLOUDS_BACKGROUND_URL);
  };

  const onSelectChange = ({ target }) => setCurrencyFrom(target.value);
  const onSecondSelectChange = ({ target }) => setCurrencyTo(target.value);
  const handleCashChange = ({ target }) => setCash(target.value);

  const handleButtonClick = () => {
    const cashInput = +cashValue;
    const currencyFromRate = currencyValues.find(({ currencyName }) => currencyName === currencyFrom).value;
    const currencyToRate = currencyValues.find(({ currencyName }) => currencyName === currencyTo).value;
    const convertedResult = ((cashInput * currencyFromRate) / currencyToRate).toFixed(2);

    setResult({
      currencyTo,
      currencyFrom,
      convertedResult,
      currencyFromRate,
      currencyToRate,
    });
  };

  return (

    <Container image={image}>
      <SectionForm
        title="Currency calculator"
        body={
          <>
            <Button toggleImage={toggleImage}
            />
            <Clock />
            <Cash cashValue={cashValue}
              handleCashChange={handleCashChange}
            />
            <SelectCurrencies
              currency={currencyFrom}
              onSelectChange={onSelectChange}
              convertCurrency={currencyTo}
              onSecondSelectChange={onSecondSelectChange}
            />
          </>}
        result={
          <>
            <RecalculateButton
              cashValue={cashValue}
              currencyFrom={currencyFrom}
              convertCurrency={currencyTo}
              handleButtonClick={handleButtonClick}
            />
            < ExchangeRate result={result} />
            <Result result={result} />
          </>}
      />
    </Container>
  );
};

export default App;
