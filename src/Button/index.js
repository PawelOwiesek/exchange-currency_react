import { StyledButton } from "./styled";

const Button = ({ toggleImage }) => (
  <StyledButton onClick={toggleImage}>Change image</StyledButton>
);

export default Button;
