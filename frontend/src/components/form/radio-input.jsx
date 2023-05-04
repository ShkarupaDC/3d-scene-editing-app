import { createFormControl } from "solid-forms";
import { mergeProps, Show } from "solid-js";
import { styled } from "solid-styled-components";

const RadioInput = (props) => {
  const mergedProps = mergeProps({ control: createFormControl("") }, props);

  return (
    <Wrapper class="wrapper-input" error={mergedProps.errorMessage}>
      <Field
        type={`radio`}
        placeholder={` `}
        id={mergedProps.id}
        name={mergedProps.name}
        value={mergedProps.control.value}
        // eslint-disable-next-line solid/reactivity
        onInput={(event) => {
          mergedProps.control.setValue(event.target.value);
          props.onInputHandler();
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

export default RadioInput;

const Wrapper = styled("div")``;

const Field = styled("input")``;

const Label = styled("label")``;

const Message = styled("div")`
  color: var(--thirdColor);
`;
