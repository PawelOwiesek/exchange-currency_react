import Cash from "./Cash";
import ClientCurrency from "./ClientCurrency";
import CurrencyExpected from "./CurrencyExpected";
import Button from "./Button";

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
            <p className="calculator__form--paragraph">
              Exchange rate:<strong
                className="calculator__form--rate"
              ></strong>
            </p>

            <p className="calculator__form--paragraph">
              Amount after conversion:<strong
                className="calculator__form--rate"
              ></strong>
            </p>
          </fieldset>
        </form>
      </section>
    </body>
  );
}

export default App;
