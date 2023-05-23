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
import { useDataRates } from "./useDataRates";
import { Loading, Error } from "./SectionForm/styled";

const CLOUDS_BACKGROUND_URL =
  "https://i.postimg.cc/j55CcnT5/ritam-baishya-ROVBDer29-PQ-unsplash.jpg";
const MONEY_BACKGROUND_URL =
  "https://i.postimg.cc/8z4DYzW4/giorgio-trovato-Wyxq-Qpy-FNk8-unsplash.jpg";

function App() {
  const currencyRates = useDataRates();
  const [image, setImage] = useState(CLOUDS_BACKGROUND_URL);
  const [currencyFrom, setCurrencyFrom] = useState();
  const [currencyTo, setCurrencyTo] = useState();
  const [cashValue, setCash] = useState("");
  const [result, setResult] = useState("");

  const toggleImage = () => {
    setImage((prevImage) =>
      prevImage === CLOUDS_BACKGROUND_URL
        ? MONEY_BACKGROUND_URL
        : CLOUDS_BACKGROUND_URL
    );
  };

  const onSelectChange = ({ target }) => setCurrencyFrom(target.value);
  const onSecondSelectChange = ({ target }) => setCurrencyTo(target.value);
  const handleCashChange = ({ target }) => setCash(target.value);

  const handleButtonClick = () => {
    const cashInput = +cashValue;
    const currencyFromRate = currencyRates.rates[currencyFrom];
    const currencyToRate = currencyRates.rates[currencyTo];
    const convertedResult = (
      (cashInput * currencyFromRate) /
      currencyToRate
    ).toFixed(2);

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
            <Button toggleImage={toggleImage} />
            <Clock />
            {currencyRates.state === "loading" ? (
              <Loading>
                Pleas wait.{" "}
                <i
                  class="fa-solid fa-clock fa-spin fa-2xl"
                  style={{ color: "#00b3ff", margin: "20px" }}
                ></i>{" "}
                We're getting things ready for You...
              </Loading>
            ) : currencyRates.state === "error" ? (
              <Error>
                <i
                  class="fa-solid fa-circle-exclamation fa-beat fa-2xl"
                  style={{ color: "#fafe10", marginRight: "10px" }}
                ></i>
                Sorry, there's a problem with the server...
              </Error>
            ) : (
              <div>
                <Cash
                  cashValue={cashValue}
                  handleCashChange={handleCashChange}
                />
                <SelectCurrencies
                  currencyRates={currencyRates}
                  currency={currencyFrom}
                  onSelectChange={onSelectChange}
                  convertCurrency={currencyTo}
                  onSecondSelectChange={onSecondSelectChange}
                />
              </div>
            )}
          </>
        }
        result={
          <>
            <RecalculateButton
              cashValue={cashValue}
              currencyFrom={currencyFrom}
              convertCurrency={currencyTo}
              handleButtonClick={handleButtonClick}
            />
            <ExchangeRate result={result} />
            <Result result={result} currencyRates={currencyRates} />
          </>
        }
      />
    </Container>
  );
}

export default App;
