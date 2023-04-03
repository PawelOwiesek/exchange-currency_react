import { useState } from "react";
import Button from "./Button";
import Cash from "./Cash";
import SelectClientCurrency from "./SelectClientCurrency";
import SelectCurrencyExpected from "./SelectCurrencyExpected";
import RecalculateButton from "./RecalculateButton";
import ExchangeRate from "./ExchangeRate";
import Result from "./Result";
import Section from "./Section";
import Container from "./Container";
import { currencyValues } from "./currencies";
function App() {

  const [image, setImage] = useState(`https://i.postimg.cc/j55CcnT5/ritam-baishya-ROVBDer29-PQ-unsplash.jpg`);
  const [showImage1, setShowImage1] = useState(true);
  const [currency, setCurrency] = useState(currencyValues[0].id);
  const [convertCurrency, setConvertCurrency] = useState(currencyValues[0].id);
  const [cashValue, setCash] = useState("");
  const [result, setResult] = useState("");

  const toggleImage = () => {
    if (showImage1) {
      setImage(`https://i.postimg.cc/8z4DYzW4/giorgio-trovato-Wyxq-Qpy-FNk8-unsplash.jpg`)
    } else {
      setImage(`https://i.postimg.cc/j55CcnT5/ritam-baishya-ROVBDer29-PQ-unsplash.jpg`)
    }
    setShowImage1(!showImage1);
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
      <Section
        title="Currency calculator"
        body={
          <>
            <Cash cashValue={cashValue}
              handleCashChange={handleCashChange}
            />
            <SelectClientCurrency
              currency={currency}
              onSelectChange={onSelectChange}
            />
            <SelectCurrencyExpected
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
