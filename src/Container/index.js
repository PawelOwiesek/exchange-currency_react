import { StyledWrapper } from "./styled";

const Container = ({ image, children }) => {
  const backgroundStyle = {
    backgroundImage: `url(${image})`,
  };

  return <StyledWrapper style={backgroundStyle}>{children}</StyledWrapper>;
};

export default Container;
