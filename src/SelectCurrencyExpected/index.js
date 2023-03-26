import { useState } from "react";
import { currencyValues } from "../currencys"

const SelectCarrencyExpected = () => {
    const [convertCurrency, setConvertCurrency] = useState(currencyValues[1].id);
    const onSelectChange = ({ target }) => setConvertCurrency(target.value);
    return (
        <p>
            <label
            ><span className="calculator__fieldset--label">Convert to:</span>
                <select
                    value={convertCurrency}
                    onChange={onSelectChange}
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
    );

}
export default SelectCarrencyExpected;