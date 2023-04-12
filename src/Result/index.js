const Result = ({ result }) => {
    return (
        <p className="results">
            Amount after conversion:
            <strong>
                {result.convertedResult} {result.currencyTo}
            </strong>
        </p>
    );
}

export default Result;