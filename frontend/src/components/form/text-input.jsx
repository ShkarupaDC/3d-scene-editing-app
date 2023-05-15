import { createFormControl } from "solid-forms";
import { Show, mergeProps, splitProps } from "solid-js";
import { styled } from "solid-styled-components";
import ErrorMessage from "./error-message";

const TextInput = (props) => {
  props = mergeProps({ control: createFormControl("") }, props);
  const [ownProps, inputProps] = splitProps(props, ["control"]);
  const control = () => ownProps.control;

  return (
    <Wrapper class="input-wrapper">
      <input
        {...inputProps}
        placeholder={` `}
        id={inputProps.id ?? inputProps.name}
        value={inputProps.value ?? control().value}
        onInput={(event) => {
          control().setValue(event.target.value);
        }}
        onBlur={() => control().markTouched(true)}
      />
      <label for={inputProps.name}>{inputProps.placeholder}</label>
      <Show when={!props.withoutMessage}>
        <ErrorMessage
          isValid={props.control.isValid}
          message={props.control.errors.message}
        />
      </Show>
    </Wrapper>
  );
};

export default TextInput;

const Wrapper = styled("div")`
  input {
    border-width: 0 0 2px;
    &:focus ~ label,
    &:not(:placeholder-shown) + label {
      transform: translate(-4px, -14px);
      padding: 0 1px;
      font-size: 12px;
      background-color: white;
    }
  }
  label {
    font-size: 18px;
    transition: 0.25s all;
    pointer-events: none;
    position: absolute;
    top: 5px;
    left: 10px;
  }
`;
