import Cash from "./Cash";
import ClientCurrency from "./ClientCurrency";
import CurrencyExpected from "./CurrencyExpected";
import Button from "./Button";
import ExchangeRate from "./ExchangeRate";
import Result from "./Result";

function App() {
  return (
    <body className="body">
      <button className="body__button">Change image</button>
      <section className="calculator">
        <h1 className="calculator__title">Currency calculator</h1>
        <form className="calculator__form">
          <fieldset className="calculator__fieldset">
            <Cash />
            <ClientCurrency />
            <CurrencyExpected />
            <Button />
            <ExchangeRate />
            <Result />
          </fieldset>
        </form>
      </section>
    </body>
  );
}

export default App;
