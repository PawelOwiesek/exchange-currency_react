import { StyledLoader, StyledError } from "./styled";

export const Loading = () => {
  return (
    <StyledLoader>
      Pleas wait.{" "}
      <span
        className="fa-solid fa-clock fa-spin fa-2xl"
        style={{ color: "#00b3ff", margin: "10px" }}
      ></span>{" "}
      We're getting things ready for You...
    </StyledLoader>
  );
};

export const Error = () => {
  return (
    <StyledError>
      <span
        className="fa-solid fa-circle-exclamation fa-beat fa-2xl"
        style={{ color: "#fafe10", marginRight: "10px" }}
      ></span>
      Sorry, there's a problem with the server...
    </StyledError>
  );
};
