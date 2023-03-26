import { useState } from "react";

const SelectClientCurrency = () => {
    const [currency, setCurrency] = useState("");

    const onSelectChange = ({ target }) => setCurrency(target.value);
    return (
        <p>
            <label>
                <span className="calculator__fieldset--label">Your currency:</span>
                <select value={currency} onChange={onSelectChange} className="calculator__fieldset--field">
                    <option value="Eur">Euro</option>
                    <option value="Usd">U.S. Dollar</option>
                    <option value="Gbp">British pound</option>
                    <option value="Pln">Polish zloty</option>
                </select>
            </label>
        </p>
    )
}



export default SelectClientCurrency;