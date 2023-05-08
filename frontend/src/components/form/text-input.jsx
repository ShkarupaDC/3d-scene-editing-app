import { createFormControl } from 'solid-forms';
import { mergeProps, splitProps, Show } from 'solid-js';
import { styled } from 'solid-styled-components';

const TextInput = (props) => {
  props = mergeProps({ control: createFormControl('') }, props);
  const [ownProps, inputProps] = splitProps(props, ['control']);
  const control = () => ownProps.control;

  return (
    <Wrapper class="wrapper-input">
      <input
        {...inputProps}
        placeholder={` `}
        id={inputProps.id ?? inputProps.name}
        value={inputProps.value ?? control().value}
        onInput={(event) => {
          control().setValue(event.target.value);
        }}
        onBlur={() => control().markTouched(true)}
      />
      <label for={inputProps.name}>{inputProps.placeholder}</label>

      <Message>
        <Show when={!control().isValid}>{control().errors.message}</Show>
      </Message>
    </Wrapper>
  );
};

export default TextInput;

const Wrapper = styled('div')`
  input {
    border-bottom: 2px solid
      ${(props) => (props.error ? 'var(--thirdColor)' : 'var(--mainColor)')};
  }
`;

const Message = styled('div')`
  color: var(--thirdColor);
`;
