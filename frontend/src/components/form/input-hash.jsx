import { styled } from "solid-styled-components";

const InputHash = (props) => {
  return (
    <Wrapper>
      <Field placeholder={` `} ref={props.ref} id={props.name} disabled />
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
