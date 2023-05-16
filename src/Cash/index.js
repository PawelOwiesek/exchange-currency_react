import { StyledInput, StyledSpan } from "./styled";

const Cash = ({ cashValue, handleCashChange }) => {
  return (
    <p>
      <label>
        <StyledSpan>Enter the amount of cash:</StyledSpan>
        <StyledInput
          value={cashValue}
          onChange={handleCashChange}
          type="number"
          step="any"
          min="1"
          required
          autoFocus
        />
      </label>
    </p>
  );
};

export default Cash;
