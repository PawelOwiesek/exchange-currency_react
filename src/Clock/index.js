

const Clock = () => {
    const time = new Date();
    setInterval(1000)
    return (
        <p className="clock">{time.toString()}</p>
    )
}

export default Clock;