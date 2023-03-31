const Result = ({ result }) => {
    return (
        <p className="calculator__form--paragraph">
            Amount after conversion:<strong
                className="calculator__form--rate"
            >{result}</strong>
        </p>
    );
};

export default Result;