import { StyledParagraph } from "../ExchangeRate/styled";

const Result = ({ result, currencyRates }) => {
  return (
    <>
      <StyledParagraph>
        Amount after conversion:
        <strong>
          {result.convertedResult} {result.currencyTo}
        </strong>
      </StyledParagraph>
      <StyledParagraph>
        <strong style={{ fontSize: "15px" }}>
          Exchange rates are taken from <br />
          the European Central Bank.{currencyRates.date}
        </strong>
      </StyledParagraph>
    </>
  );
};

export default Result;
