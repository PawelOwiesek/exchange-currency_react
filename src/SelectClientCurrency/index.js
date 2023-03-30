import { currencyValues } from "../currencys";

const SelectClientCurrency = ({ currency, onSelectChange }) => {

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
                        value={currency.value}
                    >
                        {currency.currencyName}
                    </option>
                    )))};
                </select>
            </label>
        </p>
    );
};



export default SelectClientCurrency;