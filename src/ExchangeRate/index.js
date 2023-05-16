import { StyledParagraph } from "./styled";

const ExchangeRate = ({ result }) => {
  let finalCurrency = result.currencyFromRate / result.currencyToRate;
  if (result === "") {
    finalCurrency = 0;
  }

  return (
    <StyledParagraph>
      Exchange rate:
      <strong>{finalCurrency.toFixed(2)}</strong>
    </StyledParagraph>
  );
};

export default ExchangeRate;
