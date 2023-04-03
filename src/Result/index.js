const Result = ({ result }) => (
    <p className="results">
        Amount after conversion:
        <strong>
            {result.toFixed(2)}
        </strong>
    </p>
);

export default Result;