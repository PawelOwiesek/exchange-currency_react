const Container = ({ image, children }) => {
    const backgroundStyle = {
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        width: "100vw",
    };

    return (
        <div className="backgroundImages" style={backgroundStyle}>
            {children}
        </div>
    );
};

export default Container;