import { createFormControl } from "solid-forms";
import { mergeProps } from "solid-js";
import { styled } from "solid-styled-components";
import icon from "../../assets/copy-ico.svg";

const HashInput = (props) => {
  const mergedProps = mergeProps({ control: createFormControl("") }, props);
  return (
    <Wrapper class="wrapper-input">
      <Field
        type={`text`}
        placeholder={` `}
        id={props.name}
        name={props.name}
        value={mergedProps.control.value}
        readonly={mergedProps.control.isReadonly}
        // eslint-disable-next-line solid/reactivity
        onInput={(event) => {
          mergedProps.control.setValue(event.target.value);
        }}
        disabled={mergedProps.control.isDisabled}
      />
      <Label for={props.name}>{props.placeholder}</Label>
      <Image
        visibility={!!mergedProps.control.value}
        src={icon}
        // eslint-disable-next-line solid/reactivity
        onClick={() => navigator.clipboard.writeText(mergedProps.control.value)}
      />
    </Wrapper>
  );
};

export default HashInput;

const Wrapper = styled("div")``;

const Field = styled("input")`
  border: 2px solid var(--mainColor);
  border-right: none;
  padding-left: ${(props) => (props.value ? "40px" : "8px")};
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
