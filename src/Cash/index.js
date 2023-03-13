import "./index.css";

const Cash = () => (
    <p>
        <label
        ><span className="calculator__fieldset--label"
        >Enter the amount of cash:</span
            >
            <input
                type="number"
                className="calculator__fieldset--field"
                step="any"
                min="1"
                required
            /></label>
    </p>
);

export default Cash;