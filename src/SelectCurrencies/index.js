import { StyledInput, StyledSpan } from "../Cash/styled";

const SelectCurrencies = ({
  currencyFrom,
  onSelectChange,
  convertCurrency,
  onSecondSelectChange,
  currencyRates,
}) => {
  return (
    <>
      <p>
        <label>
          <StyledSpan>Your currency:</StyledSpan>
          <StyledInput
            as="select"
            value={currencyFrom}
            onChange={onSelectChange}
          >
            {currencyRates?.rates &&
              Object.keys(currencyRates.rates).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            ;
          </StyledInput>
        </label>
      </p>
      <p>
        <label>
          <StyledSpan>Convert to:</StyledSpan>
          <StyledInput
            as="select"
            value={convertCurrency}
            onChange={onSecondSelectChange}
          >
            {currencyRates?.rates &&
              Object.keys(currencyRates.rates).map((currency) => (
                <option value={currency} key={currency}>
                  {currency}
                </option>
              ))}
          </StyledInput>
        </label>
      </p>
    </>
  );
};

export default SelectCurrencies;
