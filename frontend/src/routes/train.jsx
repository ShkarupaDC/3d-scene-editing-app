import { onMount } from "solid-js";
import { styled } from "solid-styled-components";
import { createFormControl, createFormGroup } from "solid-forms";
import { validateEmail, validateGoogleDiskLink } from "../helpers";
import { config } from "../config";
import TextInput from "../components/form/text-input";
import HashInput from "../components/form/hash-input";
import Button from "../components/form/button";
import { postTrain } from "../api";

const Train = () => {
  const group = createFormGroup({
    email: createFormControl("", {
      validators: (value) =>
        validateEmail(value)
          ? null
          : { errorMessage: "Email address is invalid" },
    }),
    googleDiskLink: createFormControl("", {
      validators: (value) =>
        validateGoogleDiskLink(value)
          ? null
          : {
              errorMessage: `There must be link on Google Disk folder`,
            },
    }),
    hash: createFormControl("", { readonly: true, disabled: true }),
  });

  onMount(async () => {
    // set email from localStorage
    if (localStorage.getItem("email")) {
      group.controls.email.setValue(localStorage.getItem("email"));
    }

    // set email from localStorage
    if (localStorage.getItem("googleDiskLink")) {
      group.controls.googleDiskLink.setValue(
        localStorage.getItem("googleDiskLink")
      );
    }
  });

  const handleFormSubmit = async () => {
    if (group.isSubmitted) {
      return;
    }
    if (!group.controls.email.isValid) {
      group.controls.email.markTouched(true);
    } else if (!group.controls.googleDiskLink.isValid) {
      group.controls.googleDiskLink.markTouched(true);
    } else {
      group.markPending(true);
      const hash = await postTrain(
        group.controls.email.value,
        group.controls.googleDiskLink.value,
        config.useMock
      );
      group.controls.hash.setValue(hash);
      group.controls.hash.markDisabled(false);
      group.markSubmitted(true);
      group.markPending(false);
    }
  };

  return (
    <Wrapper>
      <Container>
        <Form>
          <div>
            <TextInput
              name={`email`}
              type={`email`}
              placeholder={`Email`}
              control={group.controls.email}
              onInputHandler={() =>
                localStorage.setItem("email", group.controls.email.value)
              }
            />
            <TextInput
              name={`googleDiskLink`}
              type={`text`}
              placeholder={`Google Disk folder`}
              control={group.controls.googleDiskLink}
              onInputHandler={() =>
                localStorage.setItem(
                  "googleDiskLink",
                  group.controls.googleDiskLink.value
                )
              }
            />
          </div>
        </Form>
        <Fieldset>
          <HashInput
            name={`hash`}
            placeholder={`Hash`}
            control={group.controls.hash}
          />
          <Button
            name={`submit`}
            placeholder={`Train`}
            disabled={group.isPending || group.isSubmitted}
            type={`button`}
            onClick={handleFormSubmit}
          />
        </Fieldset>
      </Container>
    </Wrapper>
  );
};

export default Train;

const Wrapper = styled("section")`
  display: flex;
  gap: var(--outsidePadding);
`;

const Form = styled("form")``;

const Fieldset = styled("fieldset")`
  display: flex;
  bottom: 0;
  width: 100%;
  input {
    width: 250px;
  }
  button {
    width: 100px;
  }
`;

const Container = styled("div")`
  width: 350px;
  position: relative;
`;
