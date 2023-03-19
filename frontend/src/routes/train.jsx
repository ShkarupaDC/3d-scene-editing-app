import { createMemo } from "solid-js";
import { styled } from "solid-styled-components";
import { createFormGroup, createFormControl } from "solid-forms";
import Button from "../components/form/button";
import EmailInput from "../components/form/email-input";
import HashInput from "../components/form/hash-input";
import FileInput from "../components/form/file-input";
import Slider from "../components/slider";
import { validators } from "../helpers/validators";
import { getFilesUrls } from "../helpers/getFilesUrl";

const Train = () => {
  const { controls } = createFormGroup({
    email: createFormControl("", {
      validators: validators.email,
    }),
    files: createFormControl([], {
      validators: validators.files,
    }),
    hash: createFormControl("", { readonly: true, disabled: true }),
  });

  const imageList = createMemo(() => getFilesUrls(controls.files.value));

  const handleFormSubmit = async () => {
    if (controls.email.isValid && controls.files.isValid) {
      // Uploading the files using the fetch API to the server (temporarily with json for static)
      const formData = new FormData();
      const files = controls.files.value;
      for (let i = 0; i < files.length; i++) {
        const currFile = files[i];
        formData.append(`files`, currFile, currFile.name);
      }
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/scene-representation`,
        {
          method: "POST",
          body: { files: formData, email: controls.email.value },
        }
      );
      const hash = await res.json();
      controls.hash.setValue(hash);
      controls.hash.markDisabled(!controls.hash.value);
    } else {
      if (!controls.email.isValid) {
        controls.email.markTouched(true);
      }
      if (!controls.files.isValid) {
        controls.files.markTouched(true);
      }
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
