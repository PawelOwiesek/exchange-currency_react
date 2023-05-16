import { StyledParagraph } from "../ExchangeRate/styled";

const Result = ({ result }) => {
  return (
    <StyledParagraph>
      Amount after conversion:
      <strong>
        {result.convertedResult} {result.currencyTo}
      </strong>
    </StyledParagraph>
  );
};

export default Result;
