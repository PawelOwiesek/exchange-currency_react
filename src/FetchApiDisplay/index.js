import { StyledLoader, StyledError } from "./styled";

export const Loading = () => {
  return (
    <StyledLoader>
      Pleas wait.{" "}
      <i
        className="fa-solid fa-clock fa-spin fa-2xl"
        style={{ color: "#00b3ff", margin: "20px" }}
      ></i>{" "}
      We're getting things ready for You...
    </StyledLoader>
  );
};

export const Error = () => {
  return (
    <StyledError>
      <i
        className="fa-solid fa-circle-exclamation fa-beat fa-2xl"
        style={{ color: "#fafe10", marginRight: "10px" }}
      ></i>
      Sorry, there's a problem with the server...
    </StyledError>
  );
};
