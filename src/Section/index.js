import "./index.css";

const Section = ({ title, body, result }) => (
    <section className="calculator">
        <h1 className="calculator__title">{title}</h1>
        <form className="calculator__form">
            <fieldset className="calculator__fieldset">
                {body}
                {result}
            </fieldset>
        </form>
    </section>
)
export default Section;