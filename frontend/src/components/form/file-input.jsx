import { createSignal } from "solid-js";
import { styled } from "solid-styled-components";
import icon from "../../assets/image-ico.svg";

const FileInput = (props) => {
  const [files, setFiles] = createSignal(props.defaultFiles);

  // placeholder depend of num files
  const placeholder = () => {
    const numFiles = files().length;
    if (numFiles == 0) {
      return props.placeholder;
    } else {
      return `Selected ${numFiles} image${numFiles == 1 ? "" : "s"}`;
    }
  };

  return (
    <Wrapper class="wrapper-input" error={props.errorMessage}>
      <Field
        type={`file`}
        placeholder={` `}
        id={props.name}
        accept={`image/*`}
        multiple
        onChange={(event) => setFiles(event.target.files)}
        name={props.name}
        files={files()}
      />
      <Label for={props.name} class={`filesField`}>
        <img src={icon} />
        {placeholder()}
      </Label>
      <Message>{props.errorMessage}</Message>
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
