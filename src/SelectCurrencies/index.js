import { currencyValues } from "../currencies";
import { StyledInput, StyledSpan } from "../Cash/styled";

const SelectCurrencies = ({ currencyFrom, onSelectChange, convertCurrency, onSecondSelectChange }) => {

  return (
    <>
      <p>
        <label>
          <StyledSpan>Your currency:</StyledSpan>
          <StyledInput as="select"
            value={currencyFrom}
            onChange={onSelectChange}
          >
            {currencyValues.map((currency => (<option
              key={currency.id}
              value={currency.currencyName}
            >
              {currency.currencyName}
            </option>
            )))};
          </StyledInput>
        </label>
      </p>
      <p>
        <label>
          <StyledSpan>Convert to:</StyledSpan>
          <StyledInput as="select"
            value={convertCurrency}
            onChange={onSecondSelectChange}>
            {currencyValues.map((convertCurrency => (<option
              value={convertCurrency.currencyName}
              key={convertCurrency.id}>
              {convertCurrency.currencyName}
            </option>
            )))}
          </StyledInput>
        </label>
      </p>
    </>
  );
};

export default SelectCurrencies;