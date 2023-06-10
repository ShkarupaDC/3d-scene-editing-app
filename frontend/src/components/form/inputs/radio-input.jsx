import { styled } from 'solid-styled-components';
import Input from '../input';

const RadioInput = (props) => {
  return (
    <Wrapper>
      <Input type='radio' {...props} />
    </Wrapper>
  );
};

export default RadioInput;

const Wrapper = styled('div')`
  width: 100%;
  input {
    appearance: none;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    border: 2px solid #333;
    position: relative;
    top: 4px;
    padding: 2px;
    transition: all 0.1s;
  }
  input:checked {
    border-width: 6px;
  }
  input,
  label {
    cursor: pointer;
  }
  label {
    padding-left: 8px;
  }
`;
