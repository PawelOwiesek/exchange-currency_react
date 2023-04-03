import { currencyValues } from "../currencies";

const SelectCarrencyExpected = ({ convertCurrency, onSecondSelectChange }) => {

    return (
        <p>
            <label>
                <span className="calculator__fieldset--label">Convert to:</span>
                <select
                    value={convertCurrency}
                    onChange={onSecondSelectChange}
                    className="calculator__fieldset--field">
                    {currencyValues.map((convertCurrency => (<option
                        value={convertCurrency.value}
                        key={convertCurrency.id}>
                        {convertCurrency.currencyName}
                    </option>
                    )))}
                </select>
            </label>
        </p>
    );
};

export default SelectCarrencyExpected;