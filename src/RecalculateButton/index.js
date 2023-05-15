import { StyledButton } from "./styled";

const RecalculateButton = ({ handleButtonClick }) => {

    return (
        <StyledButton onClick={handleButtonClick}>Recalculate</StyledButton>
    );
};

export default RecalculateButton;