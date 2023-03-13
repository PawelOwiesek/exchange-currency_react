

const SelectClientCurrency = () => (
    <p>
        <label
        ><span className="calculator__fieldset--label">Your currency:</span>
            <select className="calculator__fieldset--field">
                <option value="Eur">Euro</option>
                <option value="Usd">U.S. Dollar</option>
                <option value="Gbp">British pound</option>
                <option value="Pln">Polish zloty</option>
            </select>
        </label>
    </p>
)

export default SelectClientCurrency;