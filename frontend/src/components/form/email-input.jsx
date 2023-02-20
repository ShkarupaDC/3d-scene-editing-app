import { createSignal } from "solid-js";
import { styled } from "solid-styled-components";

const EmailInput = (props) => {
  const [value, setValue] = createSignal(props.defaultValue);

  return (
    <Wrapper class="wrapper-input" error={props.errorMessage}>
      <Field
        type={`email`}
        value={value()}
        placeholder={` `}
        id={props.name}
        name={props.name}
        onChange={(event) => setValue(event.target.value)}
      />
      <Label for={props.name}>{props.placeholder}</Label>
      <Message>{props.errorMessage}</Message>
    </Wrapper>
  );
};

export default EmailInput;

const Wrapper = styled("div")`
  input {
    border-bottom: 2px solid
      ${(props) => (props.error ? "var(--thirdColor)" : "var(--mainColor)")};
  }
`;

const Field = styled("input")``;

const Label = styled("label")``;

const Message = styled("div")`
  color: var(--thirdColor);
`;
