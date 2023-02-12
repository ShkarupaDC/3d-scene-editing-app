import { createSignal } from "solid-js";
import { styled } from "solid-styled-components";

const InputEmail = (props) => {
  const [value, setValue] = createSignal(props.defaultValue);

  return (
    <Wrapper>
      <Field
        type={`email`}
        value={value()}
        placeholder={` `}
        id={props.name}
        name={props.name}
        onChange={(e) => setValue(e.target.value)}
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
