import "./index.css";

const Cash = ({ cashValue, handleCashChange }) => {
    return (
        <p>
            <label
            ><span className="calculator__fieldset--label"
            >Enter the amount of cash:</span
                >
                <input
                    value={cashValue}
                    onChange={handleCashChange}
                    type="number"
                    className="calculator__fieldset--field"
                    step="any"
                    min="1"
                    required
                />
            </label>
        </p>
    );
};



export default Cash;