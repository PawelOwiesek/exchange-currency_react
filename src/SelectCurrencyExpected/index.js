import { useState } from "react";

const SelectCarrencyExpected = () => {
    const [convertCurrency, setConvertCurrency] = useState("Euro");
    const onSelectChange = ({ target }) => setConvertCurrency(target.value);
    return (
        <p>
            <label
            ><span className="calculator__fieldset--label">Convert to:</span>
                <select value={convertCurrency} onChange={onSelectChange} className="calculator__fieldset--field">
                    <option value="Eur">Euro</option>
                    <option value="Usd">U.S. Dollar</option>
                    <option value="Gbp">British pound</option>
                    <option value="Pln">Polish zloty</option>
                </select>
            </label>
        </p>
    );

}
export default SelectCarrencyExpected;