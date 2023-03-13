// import { useState } from "react";
import Button from "./Button";
import Cash from "./Cash";
import SelectClientCurrency from "./SelectClientCurrency";
import SelectCurrencyExpected from "./SelectCurrencyExpected";
import RecalculateButton from "./RecalculateButton";
import ExchangeRate from "./ExchangeRate";
import Result from "./Result";
import Section from "./Section";

function App() {

  return (

    <>
      <Button
      />
      <Section
        title="Currency calculator"
        body={
          <>
            <Cash />
            <SelectClientCurrency />
            <SelectCurrencyExpected />
          </>}
        result={
          <>
            <RecalculateButton />
            < ExchangeRate />
            <Result />
          </>}
      />
    </>
  );
}

export default App;
