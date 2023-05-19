import { createFormControl } from "solid-forms";
import { mergeProps, splitProps } from "solid-js";
import ErrorMessage from "./error-message";

const Field = (props) => {
  props = mergeProps({ control: createFormControl("") }, props);
  const [ownProps, inputProps] = splitProps(props, ["control"]);
  const control = () => ownProps.control;
  return (
    <>
      <input
        {...inputProps}
        type={`text`}
        placeholder={` `}
        value={control().value}
        readonly={control().isReadonly}
        onInput={(event) => {
          control().setValue(event.target.value);
        }}
        disabled={control().isDisabled}
      />
      <label for={props.name}>{props.placeholder}</label>
      <ErrorMessage
        isValid={props.control.isValid}
        message={props.control.errors?.message}
        withoutMessage={props.withoutMessage}
      />
    </>
  );
};

export default Field;
