import { createEffect, createMemo, createSignal } from "solid-js";
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

  createEffect(() => {
    controls.hash.markDisabled(!controls.hash.value);
  });

  return (
    <Wrapper>
      <Slider imagesList={imageList()} />
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
          <Button name={`submit`} placeholder={`Train`} type={`button`} />
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
