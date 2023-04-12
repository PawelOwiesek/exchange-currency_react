import { currencyValues } from "../currencies";

const SelectCurrencies = ({ currency, onSelectChange, convertCurrency, onSecondSelectChange }) => {

    return (
        <>
            <p>
                <label>
                    <span className="calculator__fieldset--label">Your currency:</span>
                    <select
                        value={currency}
                        onChange={onSelectChange}
                        className="calculator__fieldset--field"
                    >
                        {currencyValues.map((currency => (<option
                            key={currency.id}
                            value={currency.currencyName}
                        >
                            {currency.currencyName}
                        </option>
                        )))};
                    </select>
                </label>
            </p>
            <p>
                <label>
                    <span className="calculator__fieldset--label">Convert to:</span>
                    <select
                        value={convertCurrency}
                        onChange={onSecondSelectChange}
                        className="calculator__fieldset--field">
                        {currencyValues.map((convertCurrency => (<option
                            value={convertCurrency.currencyName}
                            key={convertCurrency.id}>
                            {convertCurrency.currencyName}
                        </option>
                        )))}
                    </select>
                </label>
            </p>
        </>
    );
};

export default SelectCurrencies;