import { styled } from "solid-styled-components";
import { createFormGroup, createFormControl } from "solid-forms";
import Button from "../components/form/button";
import EmailInput from "../components/form/email-input";
import HashInput from "../components/form/hash-input";
import FileInput from "../components/form/file-input";
import Slider from "../components/slider";
import { getFilesUrls, validateEmail } from "../helpers";
import { postTrain } from "../api";
import { config } from "../config";

const Train = () => {
  const group = createFormGroup({
    email: createFormControl("", {
      validators: (value) =>
        validateEmail(value)
          ? null
          : { errorMessage: "Email address is invalid" },
    }),
    files: createFormControl([], {
      validators: (files) =>
        files.length < config.minFiles
          ? {
              errorMessage: `There must be ${config.minFiles} images or more to start training`,
            }
          : null,
    }),
    hash: createFormControl("", { readonly: true, disabled: true }),
  });

  const imageList = () => getFilesUrls(group.controls.files.value);

  const handleFormSubmit = async () => {
    if (group.isSubmitted) {
      return;
    }
    if (!group.controls.email.isValid) {
      group.controls.email.markTouched(true);
    } else if (!group.controls.files.isValid) {
      group.controls.files.markTouched(true);
    } else {
      // temp const
      const isMock = true;

      group.markPending(true);
      const hash = await postTrain(
        group.controls.email.value,
        group.controls.files.value,
        isMock
      );
      group.controls.hash.setValue(hash);
      group.controls.hash.markDisabled(false);
      group.markSubmitted(true);
      group.markPending(false);
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
              control={group.controls.email}
            />
            <FileInput
              name={`files`}
              placeholder={`Upload images`}
              control={group.controls.files}
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
