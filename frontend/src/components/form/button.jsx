import { splitProps } from "solid-js";
import { styled } from "solid-styled-components";

const Button = (props) => {
  const [ownProps, buttonProps] = splitProps(props, ["placeholder"]);
  return (
    <div class="wrapper-input">
      <Field {...buttonProps}>{ownProps.placeholder}</Field>
    </div>
  );
};

export default Button;

const Field = styled("button")`
  border: 2px solid var(--mainColor);
  transition: background-color 0.25s;
  &:hover {
    background-color: var(--mainColor);
    color: white;
  }
`;
