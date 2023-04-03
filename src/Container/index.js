import "./index.css"
const Container = ({ image, children }) => {
    const backgroundStyle = {
        backgroundImage: `url(${image})`
    };

    return (
        <div className="container" style={backgroundStyle}>
            {children}
        </div>
    );
};

export default Container;