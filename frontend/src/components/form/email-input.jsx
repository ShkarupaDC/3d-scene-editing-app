import { createSignal } from "solid-js";
import { styled } from "solid-styled-components";

const EmailInput = (props) => {
  const [value, setValue] = createSignal(props.defaultValue);

  return (
    <Wrapper class="wrapper-input">
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

const Wrapper = styled("div")``;

const Field = styled("input")`
  border-bottom: 2px solid var(--mainColor);
`;

const Label = styled("label")`
  color: var(--mainColor);
`;

const Message = styled("div")``;
