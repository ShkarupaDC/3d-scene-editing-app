import { createFormControl } from "solid-forms";
import { mergeProps, Show } from "solid-js";
import { styled } from "solid-styled-components";
import icon from "../../assets/copy-ico.svg";
import ErrorMessage from "./error-message";

const HashInput = (props) => {
  props = mergeProps({ control: createFormControl("") }, props);
  return (
    <Wrapper value={!!props.control.value} class="input-wrapper">
      <input
        type={`text`}
        placeholder={` `}
        id={props.name}
        name={props.name}
        value={props.control.value}
        readonly={props.control.isReadonly}
        onInput={(event) => {
          props.control.setValue(event.target.value);
        }}
        disabled={props.control.isDisabled}
      />
      <label for={props.name}>{props.placeholder}</label>
      <Show when={!props.withoutMessage}>
        <ErrorMessage
          isValid={props.control.isValid}
          message={props.control.errors.message}
        />
      </Show>
      <img
        visibility={props.control.value}
        src={icon}
        onClick={() => navigator.clipboard.writeText(props.control.value)}
      />
    </Wrapper>
  );
};

export default HashInput;

const Wrapper = styled("div")`
  input {
    border-width: 2px 0 2px 2px;
    padding-left: ${(props) => (props.value ? "40px" : "8px")};
    &:focus ~ label,
    &:not(:placeholder-shown) + label {
      transform: translate(-4px, -14px);
      padding: 0 1px;
      font-size: 12px;
      background-color: white;
    }
  }
  label {
    padding-top: 2px;
    font-size: 18px;
    transition: 0.25s all;
    pointer-events: none;
    position: absolute;
    top: 5px;
    left: 10px;
  }
  img {
    cursor: pointer;
    visibility: ${(props) => (props.value ? "visible" : "hidden")};
    position: absolute;
    width: 20px;
    top: 10px;
    left: 10px;
  }
`;
