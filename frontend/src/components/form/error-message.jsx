import { Show } from "solid-js";
import { styled } from "solid-styled-components";

const ErrorMessage = (props) => {
  return (
    <Wrapper>
      <Show when={!props.isValid}>{props.message}</Show>
    </Wrapper>
  );
};

export default ErrorMessage;

const Wrapper = styled("div")`
  color: var(--thirdColor);
  font-size: 14px;
  min-height: 40px;
`;
