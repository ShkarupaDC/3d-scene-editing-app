import { createFormControl } from "solid-forms";
import { mergeProps, splitProps } from "solid-js";
import { styled } from "solid-styled-components";

const RadioInput = (props) => {
  props = mergeProps({ control: createFormControl("") }, props);
  const [ownProps, inputProps] = splitProps(props, ["control"]);
  const control = () => ownProps.control;

  return (
    <Wrapper>
      <input
        type="radio"
        {...inputProps}
        id={inputProps.id}
        value={inputProps.value ?? control().value}
        onInput={(event) => {
          control().setValue(event.target.value);
        }}
      />
      <label for={inputProps.id}>{inputProps.placeholder}</label>
    </Wrapper>
  );
};

export default RadioInput;

const Wrapper = styled("div")`
  width: 100%;
  input {
    appearance: none;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    border: 2px solid #333;
    position: relative;
    top: 4px;
    padding: 2px;
    transition: all 0.1s;
  }
  input:checked {
    border-width: 6px;
  }
  input,
  label {
    cursor: pointer;
  }
  label {
    padding-left: 8px;
  }
`;
