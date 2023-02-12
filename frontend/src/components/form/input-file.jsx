import { createSignal } from "solid-js";
import { styled } from "solid-styled-components";
import icon from "../../assets/image-ico.svg";

const InputFile = (props) => {
  // use state of files
  const [numFiles, setNumFiles] = createSignal(null);

  // placeholder depend of num files
  const placeholder = () => {
    const placeholderWithSelected = `Selected ${numFiles()} image`;
    switch (numFiles()) {
      case null:
        return props.placeholder;
      case 1:
        return placeholderWithSelected;
      default:
        return placeholderWithSelected + `s`;
    }
  };

  const handleChange = (e) => {
    setNumFiles(e.target.files.length);
  };

  return (
    <Wrapper>
      <Field
        type={`file`}
        placeholder={` `}
        id={props.name}
        accept={`image/*`}
        multiple
        onChange={handleChange}
      />
      <Label for={props.name} class={`filesField`}>
        <img src={icon} />
        {placeholder()}
      </Label>
      <Message>{props.errorMessage}</Message>
    </Wrapper>
  );
};

export default InputFile;

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
