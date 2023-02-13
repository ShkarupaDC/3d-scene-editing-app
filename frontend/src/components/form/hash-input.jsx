import { createEffect, createSignal } from "solid-js";
import { styled } from "solid-styled-components";
import icon from "../../assets/copy-ico.svg";

const HashInput = (props) => {
  const [value, setValue] = createSignal(
    props.defaultValue || `djkbfsdjkbfsdj`
  );
  const [isValue, setIsValue] = createSignal(Boolean(props.defaultValue));

  createEffect(() => {
    setIsValue(Boolean(value()));
  });

  // copy value of field to clickboard
  const copyToClickboard = () => {
    navigator.clipboard.writeText(value());
  };

  // freeze value in input
  const freezeInput = (e) => {
    e.target.value = value();
  };

  return (
    <Wrapper>
      <Field
        type={`text`}
        placeholder={` `}
        id={props.name}
        name={props.name}
        onChange={freezeInput}
        value={value()}
        disabled={!isValue()}
      />
      <Label for={props.name}>{props.placeholder}</Label>
      <Image src={icon} visibility={isValue()} onClick={copyToClickboard} />
    </Wrapper>
  );
};

export default HashInput;

const Wrapper = styled("fieldset")``;

const Field = styled("input")`
  border: 2px solid var(--mainColor);
  border-right: none;
  padding-left: 40px;
`;

const Label = styled("label")`
  padding-top: 2px;
`;

const Image = styled("img")`
  cursor: pointer;
  visibility: ${(props) => (props.visibility ? "visible" : "hidden")};
  position: absolute;
  width: 20px;
  top: 10px;
  left: 10px;
`;
