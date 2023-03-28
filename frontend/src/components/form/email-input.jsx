import { createFormControl } from "solid-forms";
import { mergeProps, Show } from "solid-js";
import { styled } from "solid-styled-components";

const EmailInput = (props) => {
  const mergedProps = mergeProps({ control: createFormControl("") }, props);

  return (
    <Wrapper class="wrapper-input" error={mergedProps.errorMessage}>
      <Field
        type={`email`}
        placeholder={` `}
        id={mergedProps.name}
        name={mergedProps.name}
        value={mergedProps.control.value}
        // eslint-disable-next-line solid/reactivity
        onInput={(event) => {
          mergedProps.control.setValue(event.target.value);
        }}
        // eslint-disable-next-line solid/reactivity
        onBlur={() => props.control.markTouched(true)}
      />
      <Label for={mergedProps.name}>{mergedProps.placeholder}</Label>

      <Message>
        <Show when={props.control.isTouched && props.control.errors}>
          {mergedProps.control.errors.errorMessage}
        </Show>
      </Message>
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
