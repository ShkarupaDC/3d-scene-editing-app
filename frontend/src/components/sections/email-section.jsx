import { createFormControl } from "solid-forms";
import { styled } from "solid-styled-components";

import TextInput from "../form/text-input";
import Header from "../header";
import { createEffect, onMount } from "solid-js";

const storage = localStorage;

const EmailSection = () => {
  const email = createFormControl(storage.getItem("email") ?? "");
  let element;

  onMount(() => {
    email.setValidators((value) => {
      if (typeof value === "string" && value.length === 0) {
        return { message: "Email is missing" };
      }
      if (!element.validity.valid) {
        return { message: element.validationMessage };
      }
      return null;
    });
  });
  createEffect(() => {
    if (email.isValid) {
      storage.setItem("email", email.value);
    } else {
      storage.removeItem("email");
    }
  });

  return (
    <>
      <Header text="Email" />
      <Fieldset>
        <TextInput
          type={`email`}
          name={`email`}
          placeholder={`Email`}
          control={email}
          ref={element}
          // pattern={}
        />
      </Fieldset>
    </>
  );
};

export default EmailSection;

const Fieldset = styled("fieldset")`
  width: 425px;
  max-width: 425px;
  display: flex;
  margin: auto;
`;
