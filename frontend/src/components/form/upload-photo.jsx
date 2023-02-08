import { createSignal } from "solid-js";
import { styled } from "solid-styled-components";
import icon from "../../assets/image-ico.svg";

const UploadPhoto = (props) => {
  // use state of files
  const [numFiles, setNumFiles] = createSignal(null);

  // ref
  const ref = () => props.ref;

  // placeholder depend of num files
  const placeholder = () =>
    numFiles()
      ? numFiles() === 1
        ? `Selected ${numFiles()} image`
        : `Selected ${numFiles()} images`
      : props.placeholder;

  const handleChange = (e) => {
    setNumFiles(e.target.files.length);
  };

  return (
    <Wrapper>
      <Field
        type={`file`}
        ref={ref()}
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

export default UploadPhoto;

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
