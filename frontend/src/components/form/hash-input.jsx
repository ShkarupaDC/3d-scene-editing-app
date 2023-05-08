import { createFormControl } from "solid-forms";
import { mergeProps, Show } from "solid-js";
import { styled } from "solid-styled-components";
import icon from "../../assets/copy-ico.svg";

const HashInput = (props) => {
  props = mergeProps({ control: createFormControl("") }, props);
  return (
    <div class="wrapper-input">
      <Field
        type={`text`}
        placeholder={` `}
        id={props.name}
        name={props.name}
        value={props.control.value}
        readonly={props.control.isReadonly}
        // eslint-disable-next-line solid/reactivity
        onInput={(event) => {
          props.control.setValue(event.target.value);
        }}
        disabled={props.control.isDisabled}
      />
      <Label for={props.name}>{props.placeholder}</Label>
      <Show when={!props.withoutMessage}>
        <Message withoutMessage={props.withoutMessage}>
          <Show when={!props.control.isValid}>
            {props.control.errors?.message}
          </Show>
        </Message>
      </Show>
      <Image
        visibility={!!props.control.value}
        src={icon}
        // eslint-disable-next-line solid/reactivity
        onClick={() => navigator.clipboard.writeText(props.control.value)}
      />
    </div>
  );
};

export default HashInput;

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

const Message = styled("div")`
  color: var(--thirdColor);
  display: ${(props) => (props.withoutMessage ? "none" : "flex")};
`;
