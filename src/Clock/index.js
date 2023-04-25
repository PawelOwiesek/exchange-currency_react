import { useEffect, useState } from "react";
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
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <span className="clock">{formatDate(date)}</span>
    )
}

export default Clock;