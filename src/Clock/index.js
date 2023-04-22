import { useEffect, useState } from "react";


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
        <p className="clock">{formatedDate(date)}</p>
    )
}

export default Clock;