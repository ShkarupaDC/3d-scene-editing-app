import { createSignal } from "solid-js";
import { styled } from "solid-styled-components";
import icon from "../../assets/image-ico.svg";

const FileInput = (props) => {
  // use state of files
  const [files, setFiles] = createSignal(props.defaultFiles);

  // placeholder depend of num files
  const placeholder = () => {
    const numFiles = files().length;
    const placeholderWithSelected = `Selected ${numFiles} image`;
    switch (numFiles) {
      case 0:
        return props.placeholder;
      case 1:
        return placeholderWithSelected;
      default:
        return `${placeholderWithSelected}s`;
    }
  };

  return (
    <Wrapper>
      <Field
        type={`file`}
        placeholder={` `}
        id={props.name}
        accept={`image/*`}
        multiple
        onChange={(e) => setFiles(e.target.files)}
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

const Wrapper = styled("fieldset")`
  img {
    position: absolute;
    top: 10px;
    left: 10px;
  }
  label:hover > img {
    filter: invert();
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
  border: 2px solid var(--mainColor);
  cursor: pointer;
  transition: background-color 0.25s;
  &:hover {
    background-color: var(--mainColor);
    color: white;
  }
`;
const Message = styled("div")``;
