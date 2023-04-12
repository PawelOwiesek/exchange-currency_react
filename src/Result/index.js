const Result = ({ result }) => {
    return (
        <p className="results">
            Amount after conversion:
            <strong>
                {result.convertedResult} {result.convertCurrency}
            </strong>
        </p>
    );
}

export default Result;