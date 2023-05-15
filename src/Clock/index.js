import { useCurrentDate } from "./useCurrentDate";
import "./index.css";

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

    return (
        <span className="clock">{formatDate(date)}</span>
    )
};

export default Clock;