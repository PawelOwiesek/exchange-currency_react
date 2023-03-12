


function App() {
  return (
    <body class="body js-body">
      <button class="body__button js-imageButton">Change image</button>
      <section class="calculator">
        <h1 class="calculator__title">Currency calculator</h1>
        <form class="calculator__form js-form">
          <fieldset class="calculator__fieldset">
            <p>
              <label
              ><span class="calculator__fieldset--label"
              >Enter the amount of cash:</span
                >
                <input
                  type="number"
                  class="calculator__fieldset--field js-amount"
                  step="any"
                  min="1"
                  required
                  autofocus
                /></label>
            </p>
            <p>
              <label
              ><span class="calculator__fieldset--label">Your currency:</span>
                <select class="calculator__fieldset--field js-firstValue">
                  <option value="Eur">Euro</option>
                  <option value="Usd">U.S. Dollar</option>
                  <option value="Gbp">British pound</option>
                  <option value="Pln">Polish zloty</option>
                </select>
              </label>
            </p>
            <p>
              <label
              ><span class="calculator__fieldset--label">Convert to:</span>
                <select class="calculator__fieldset--field js-secondValue">
                  <option value="Eur">Euro</option>
                  <option value="Usd">U.S. Dollar</option>
                  <option value="Gbp">British pound</option>
                  <option value="Pln">Polish zloty</option>
                </select>
              </label>
            </p>
            <button class="calculator__form--button">Recalculate</button>
            <p class="calculator__form--paragraph">
              Exchange rate:<strong
                class="calculator__form--rate js-exchangeRate"
              ></strong>
            </p>

            <p class="calculator__form--paragraph">
              Amount after conversion:<strong
                class="calculator__form--rate js-result"
              ></strong>
            </p>
          </fieldset>
        </form>
      </section>
    </body>
  );
}

export default App;
