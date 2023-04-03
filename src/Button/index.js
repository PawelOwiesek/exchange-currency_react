import "./index.css";

const Button = ({ toggleImage }) => (
    <button onClick={toggleImage} className="button">Change image</button>)

export default Button;