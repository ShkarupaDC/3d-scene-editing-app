import { createSignal } from "solid-js";
import { styled } from "solid-styled-components";

const InputHash = (props) => {
  const [value, setValue] = createSignal(props.defaultValue);
  return (
    <Wrapper>
      <Field
        placeholder={` `}
        id={props.name}
        name={props.name}
        onChange={(e) => setValue(e.target.value)}
        value={value()}
        disabled
      />
      <Label for={props.name}>{props.placeholder}</Label>
    </Wrapper>
  );
};

export default InputHash;

const Wrapper = styled("fieldset")``;

const Field = styled("input")`
  border: 2px solid var(--mainColor);
  border-right: none;
  &::after {
    content: "copy";
    height: 38px;
    width: 38px;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Label = styled("label")`
  padding-top: 2px;
`;
