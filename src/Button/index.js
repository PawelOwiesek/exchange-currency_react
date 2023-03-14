import "./index.css";

const Button = ({ toggleImage }) => (
    <button onClick={toggleImage} className="body__button">Change image</button>)

export default Button;