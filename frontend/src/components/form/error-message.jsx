import { Show } from "solid-js";
import { styled } from "solid-styled-components";

const ErrorMessage = (props) => {
  return (
    <Show when={!props.withoutMessage}>
      <Wrapper>
        <Show when={!props.isValid}>{props.message}</Show>
      </Wrapper>
    </Show>
  );
};

export default ErrorMessage;

const Wrapper = styled("div")`
  color: var(--thirdColor);
  font-size: 14px;
  min-height: 40px;
`;
