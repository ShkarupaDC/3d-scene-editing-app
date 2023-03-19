import { createFormControl } from "solid-forms";
import { mergeProps, Show } from "solid-js";
import { styled } from "solid-styled-components";
import icon from "../../assets/image-ico.svg";

const FileInput = (props) => {
  const mergedProps = mergeProps({ control: createFormControl("") }, props);

  // placeholder depend of num files
  const placeholder = () => {
    const numFiles = mergedProps.control.value.length;
    if (numFiles === 0) {
      return mergedProps.placeholder;
    } else {
      return `Selected ${numFiles} image${numFiles == 1 ? "" : "s"}`;
    }
  };

  return (
    <Wrapper
      class="wrapper-input"
      error={props.control.isTouched && mergedProps.errorMessage}
    >
      <Field
        type={`file`}
        placeholder={` `}
        name={mergedProps.name}
        id={mergedProps.name}
        // set value
        files={mergedProps.control.value}
        // eslint-disable-next-line solid/reactivity
        onInput={(event) => {
          mergedProps.control.setValue(event.target.files);
        }}
        // set is touched
        // eslint-disable-next-line solid/reactivity
        onChange={() => props.control.markTouched(true)}
        accept={`image/*`}
        multiple
      />
      <Label for={mergedProps.name} class={`filesField`}>
        <img src={icon} />
        {placeholder()}
      </Label>

      <Message>
        <Show when={props.control.isTouched && props.control.errors}>
          {mergedProps.control.errors.errorMessage}
        </Show>
      </Message>
    </Wrapper>
  );
};

export default FileInput;

const Wrapper = styled("div")`
  img {
    position: absolute;
    top: 10px;
    left: 10px;
  }
  label:hover > img {
    filter: invert();
  }
  label {
    border: 2px solid
      ${(props) => (props.error ? "var(--thirdColor)" : "var(--mainColor)")};
    &:hover {
      background-color: ${(props) =>
        props.error ? "var(--thirdColor)" : "var(--mainColor)"};
    }
  }
`;
const Field = styled("input")`
  display: none;
`;
const Label = styled("label")`
  display: block;
  padding: 6px;
  text-align: center;
  width: 100%;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.25s;
  &:hover {
    color: white;
  }
`;
const Message = styled("div")`
  color: var(--thirdColor);
`;
