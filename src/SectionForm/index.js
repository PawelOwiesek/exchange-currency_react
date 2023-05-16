import { StyledForm, StyledTitle, StyledFieldset } from "./styled";

const SectionForm = ({ title, body, result }) => {
  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section>
      <StyledTitle>{title}</StyledTitle>
      <StyledForm onSubmit={onFormSubmit}>
        <StyledFieldset>
          {body}
          {result}
        </StyledFieldset>
      </StyledForm>
    </section>
  );
};

export default SectionForm;
