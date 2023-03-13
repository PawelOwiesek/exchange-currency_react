import Button from "./Button";
import Cash from "./Cash";
import SelectClientCurrency from "./SelectClientCurrency";
import SelectCurrencyExpected from "./SelectCurrencyExpected";
import RecalculateButton from "./RecalculateButton";
import ExchangeRate from "./ExchangeRate";
import Result from "./Result";

function App() {
  return (
    <body className="body">
      <Button />
      <section className="calculator">
        <h1 className="calculator__title">Currency calculator</h1>
        <form className="calculator__form">
          <fieldset className="calculator__fieldset">
            <Cash />
            <SelectClientCurrency />
            <SelectCurrencyExpected />
            <RecalculateButton />
            <ExchangeRate />
            <Result />
          </fieldset>
        </form>
      </section>
    </body>
  );
}

export default App;
