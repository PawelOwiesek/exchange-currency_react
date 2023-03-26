import { useState } from "react";
import { currencyValues } from "../currencys";

const SelectClientCurrency = () => {
    const [currency, setCurrency] = useState(currencyValues[0].id);

    const onSelectChange = ({ target }) => setCurrency(target.value);
    return (
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
                    )))}
                </select>
            </label>
        </p>
    )
}



export default SelectClientCurrency;