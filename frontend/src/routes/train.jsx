import { createMemo } from "solid-js";
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
  const { controls } = createFormGroup({
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

  const imageList = createMemo(() => getFilesUrls(controls.files.value));

  const handleFormSubmit = async () => {
    if (!controls.email.isValid) {
      controls.email.markTouched(true);
    } else if (!controls.files.isValid) {
      controls.files.markTouched(true);
    } else {
      const hash = await sceneRepresentation(controls);
      controls.hash.setValue(hash);
      controls.hash.markDisabled(false);
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
              control={controls.email}
            />
            <FileInput
              name={`files`}
              placeholder={`Upload images`}
              control={controls.files}
            />
          </div>
        </Form>
        <Fieldset>
          <HashInput
            name={`hash`}
            placeholder={`Hash`}
            control={controls.hash}
          />
          <Button
            name={`submit`}
            placeholder={`Train`}
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
