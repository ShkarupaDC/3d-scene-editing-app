import { splitProps } from 'solid-js';
import { styled } from 'solid-styled-components';

const Button = (props) => {
  const [ownProps, buttonProps] = splitProps(props, ['placeholder']);
  return (
    <>
      <ButtonHTML {...buttonProps}>{ownProps.placeholder}</ButtonHTML>
    </>
  );
};

export default Button;

const ButtonHTML = styled('button')`
  display: block;
  border: 2px solid var(--mainColor);
  transition: background-color 0.25s;
  &:hover:not(:disabled) {
    background-color: var(--mainColor);
    color: white;
  }
`;
