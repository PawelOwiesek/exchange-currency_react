const Result = ({ result }) => {
    return (
        <p className="results">
            Amount after conversion:
            <strong>
                {result}
            </strong>
        </p>
    );
}

export default Result;