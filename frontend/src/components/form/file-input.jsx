import { styled } from "solid-styled-components";
import icon from "../../assets/image-ico.svg";
import { createSignal } from "solid-js";

const FileInput = (props) => {
  const [placeholder, setPlaceholder] = createSignal(`Choose files`);

  return (
    <Wrapper>
      <Field
        type="file"
        {...props}
        onChange={(event) =>
          setPlaceholder(() => {
            const files = event.target.files;
            return files.length === 0
              ? `Choose files`
              : `Chose ${files.length} file${files.length === 1 ? `` : `s`}`;
          })
        }
      />
      <Label for={props.id}>
        <img src={icon} />
        {placeholder()}
      </Label>
    </Wrapper>
  );
};

export default FileInput;

const Wrapper = styled("div")`
  position: relative;
  img {
    position: absolute;
    top: 10px;
    left: 10px;
  }
  label:hover > img {
    filter: invert();
  }
  label {
    border: 2px solid var(--mainColor);
    &:hover {
      background-color: var(--mainColor);
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
