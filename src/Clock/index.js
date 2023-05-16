import { useCurrentDate } from "./useCurrentDate";
import { StyledSpan } from "./styled";

const formatDate = (date) =>
  date.toLocaleString("en", {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

const Clock = () => {
  const date = useCurrentDate();

  return <StyledSpan>{formatDate(date)}</StyledSpan>;
};

export default Clock;
