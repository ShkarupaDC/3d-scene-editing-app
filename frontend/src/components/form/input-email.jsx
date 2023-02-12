import { styled } from "solid-styled-components";

const InputEmail = (props) => {
  const value = () => props.value || "";

  return (
    <Wrapper>
      <Field
        type={`email`}
        placeholder={` `}
        id={props.name}
        name={props.name}
        value={value()}
      />
      <Label for={props.name}>{props.placeholder}</Label>
      <Message>{props.errorMessage}</Message>
    </Wrapper>
  );
};

export default InputEmail;

const Wrapper = styled.fieldset``;

const Field = styled.input`
  border-bottom: 2px solid var(--mainColor);
`;

const Label = styled.label`
  color: var(--mainColor);
`;

const Message = styled("div")``;
