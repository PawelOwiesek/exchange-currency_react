import { StyledButton } from "./styled";

const Button = ({ toggleImage }) => (
    <StyledButton onClick={toggleImage} className="button">Change image</StyledButton>)

export default Button;