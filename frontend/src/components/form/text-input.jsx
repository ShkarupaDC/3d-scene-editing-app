import { styled } from "solid-styled-components";
import Field from "./field";

const TextInput = (props) => {
  return (
    <Wrapper class="input-wrapper">
      <Field {...props} />
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
