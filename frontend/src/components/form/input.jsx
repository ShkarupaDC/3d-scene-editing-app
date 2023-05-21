import { mergeProps, splitProps, Show } from 'solid-js';
import { createFormControl } from 'solid-forms';
import ErrorMessage from './error-message';

const Input = (props) => {
  props = mergeProps(
    { control: createFormControl(''), showError: true },
    props,
  );
  const [ownProps, inputProps] = splitProps(props, [
    'control',
    'placeholder',
    'showError',
    'onInput',
  ]);
  const control = () => ownProps.control;
  const placeholder = () => ownProps.placeholder;

  const setValue = (event) => control().setValue(event.target.value);

  return (
    <>
      <input
        {...inputProps}
        placeholder=' '
        title={placeholder()}
        value={control().value}
        onInput={props.onInput ?? setValue}
        disabled={control().isDisabled}
        readonly={control().isReadonly}
      />
      <label for={props.id}>{placeholder()}</label>
      <Show when={props.showError}>
        <ErrorMessage control={control()} />
      </Show>
    </>
  );
};

export default Input;
