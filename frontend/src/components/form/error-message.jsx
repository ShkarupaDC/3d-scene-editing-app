import { createFormControl } from 'solid-forms';
import { Show } from 'solid-js';
import { styled } from 'solid-styled-components';
import { mergeProps } from 'solid-js';

const ErrorMessage = (props) => {
  props = mergeProps({ control: createFormControl('') }, props);

  return (
    <Wrapper>
      <Show when={!props.control.isValid}>{props.control.errors.message}</Show>
    </Wrapper>
  );
};

export default ErrorMessage;

const Wrapper = styled('div')`
  color: var(--thirdColor);
  font-size: 14px;
  min-height: 40px;
`;
