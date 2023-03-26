import "./index.css";
import { useState } from "react";

const Cash = () => {
    const [cash, setCash] = useState("");

    return (
        <p>
            <label
            ><span className="calculator__fieldset--label"
            >Enter the amount of cash:</span
                >
                <input
                    value={cash}
                    onChange={({ target }) => setCash(target.value)}
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