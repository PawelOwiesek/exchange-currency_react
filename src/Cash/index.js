import { useEffect, useRef } from "react";
import { StyledInput, StyledSpan } from "./styled";

const Cash = ({ cashValue, handleCashChange }) => {
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <p>
            <label
            ><StyledSpan >Enter the amount of cash:</StyledSpan>
                <StyledInput
                    ref={inputRef}
                    value={cashValue}
                    onChange={handleCashChange}
                    type="number"
                    step="any"
                    min="1"
                    required
                />
            </label>
        </p>
    );
};






export default Cash;