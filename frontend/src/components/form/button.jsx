import { styled } from "solid-styled-components";

const Button = (props) => {
  return (
    <Wrapper class="wrapper-input">
      <Field
        type={props.type}
        disabled={props.disabled}
        onClick={props.onClick}
      >
        {props.placeholder}
      </Field>
    </Wrapper>
  );
};

export default Button;

const Wrapper = styled("div")``;

const Field = styled("button")`
  border: 2px solid var(--mainColor);
  transition: background-color 0.25s;
  &:hover {
    background-color: var(--mainColor);
    color: white;
  }
`;
