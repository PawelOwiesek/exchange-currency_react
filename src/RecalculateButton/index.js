import "./index.css";

const RecalculateButton = ({ handleButtonClick }) => {

    return (
        <button onClick={handleButtonClick} className="calculator__form--button">Recalculate</button>
    );
};

export default RecalculateButton;