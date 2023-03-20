import { styled } from "solid-styled-components";
import { createFormGroup, createFormControl } from "solid-forms";
import Button from "../components/form/button";
import EmailInput from "../components/form/email-input";
import HashInput from "../components/form/hash-input";
import FileInput from "../components/form/file-input";
import Slider from "../components/slider";
import { validateEmail } from "../helpers/validators";
import { getFilesUrls } from "../helpers/getFilesUrl";
import { sceneRepresentation } from "../api";

const Train = () => {
  const formGroup = createFormGroup({
    email: createFormControl("", {
      validators: (value) =>
        validateEmail(value) ? null : { errorMessage: "Invalid email address" },
    }),
    files: createFormControl([], {
      validators: (files) =>
        files.length < 10
          ? { errorMessage: "Number files must be 10 or more" }
          : null,
    }),
    hash: createFormControl("", { readonly: true, disabled: true }),
  });

  const imageList = () => getFilesUrls(formGroup.controls.files.value);

  const handleFormSubmit = async () => {
    console.log(formGroup.isSubmitted);
    if (formGroup.isSubmitted) {
      console.log("is submitted");
      return;
    }
    if (!formGroup.controls.email.isValid) {
      formGroup.controls.email.markTouched(true);
    } else if (!formGroup.controls.files.isValid) {
      formGroup.controls.files.markTouched(true);
    } else {
      formGroup.markPending(true);
      const hash = await sceneRepresentation(formGroup.controls);
      formGroup.controls.hash.setValue(hash);
      formGroup.controls.hash.markDisabled(false);
      formGroup.markSubmitted(true);
      formGroup.markPending(false);
    }
  };

  return (
    <Wrapper>
      <Slider imageList={imageList()} />
      <Container>
        <Form>
          <div>
            <EmailInput
              name={`email`}
              placeholder={`Email`}
              control={formGroup.controls.email}
            />
            <FileInput
              name={`files`}
              placeholder={`Upload images`}
              control={formGroup.controls.files}
            />
          </div>
        </Form>
        <Fieldset>
          <HashInput
            name={`hash`}
            placeholder={`Hash`}
            control={formGroup.controls.hash}
          />
          <Button
            name={`submit`}
            placeholder={`Train`}
            disabled={formGroup.isPending}
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
  position: absolute;
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
