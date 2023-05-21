import { styled } from 'solid-styled-components';
import icon from '../../../assets/image-ico.svg';
import { createSignal } from 'solid-js';
import Input from '../input';

const FileInput = (props) => {
  const defaultPlaceholder = 'Choose files';
  const [placeholder, setPlaceholder] = createSignal(defaultPlaceholder);

  const changePlaceholder = (event) =>
    setPlaceholder(() => {
      const files = event.target.files;
      return files.length === 0
        ? defaultPlaceholder
        : `Chosen ${files.length} file${files.length === 1 ? `` : `s`}`;
    });

  return (
    <Wrapper>
      <Input
        type='file'
        onChange={changePlaceholder}
        placeholder={placeholder()}
        {...props}
      />
      <img src={icon} />
    </Wrapper>
  );
};

export default FileInput;

const Wrapper = styled('div')`
  position: relative;
  input {
    display: none;
  }
  img {
    position: absolute;
    top: 10px;
    left: 10px;
  }
  label:hover > img {
    filter: invert();
  }
  label {
    display: block;
    padding: 6px;
    text-align: center;
    width: 100%;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.25s;
    border: 2px solid var(--mainColor);
    &:hover {
      color: white;
    }
    &:hover {
      background-color: var(--mainColor);
    }
  }
`;
