import { useEffect, useState } from "react";
import "./index.css";

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

    const formatedDate = (date) =>
        date.toLocaleString("en", {
            weekday: "long",
            day: "numeric",
            month: "long",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
        });



    return (
        <span className="clock">{formatedDate(date)}</span>
    )
}

export default Clock;