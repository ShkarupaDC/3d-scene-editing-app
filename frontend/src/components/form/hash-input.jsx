import { createEffect, createSignal } from "solid-js";
import { styled } from "solid-styled-components";
import icon from "../../assets/copy-ico.svg";

const HashInput = (props) => {
  const value = () => props.value || "";
  const [hasValue, setHasValue] = createSignal(Boolean(props.defaultValue));

  const freezeInput = (event) => {
    event.target.value = value();
  };

  const writeTextToClipboard = () => {
    navigator.clipboard.writeText(value());
  };

  createEffect(() => {
    setHasValue(value().length !== 0);
  });

  return (
    <Wrapper class="wrapper-input">
      <Field
        type={`text`}
        placeholder={` `}
        id={props.name}
        name={props.name}
        onInput={freezeInput}
        value={value()}
        disabled={!hasValue()}
      />
      <Label for={props.name}>{props.placeholder}</Label>
      <Image
        src={icon}
        visibility={hasValue()}
        onClick={writeTextToClipboard}
      />
    </Wrapper>
  );
};

export default HashInput;

const Wrapper = styled("div")``;

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
