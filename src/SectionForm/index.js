import "./index.css";

const SectionForm = ({ title, body, result }) => {
    const onFormSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <section className="calculator">
            <h1 className="calculator__title">{title}</h1>
            <form onSubmit={onFormSubmit} className="calculator__form">
                <fieldset className="calculator__fieldset">
                    {body}
                    {result}
                </fieldset>
            </form>
        </section>
    );
};

export default SectionForm;