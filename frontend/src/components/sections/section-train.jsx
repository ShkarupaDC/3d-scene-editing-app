import { styled } from "solid-styled-components";
import { createFormControl, createFormGroup } from "solid-forms";
import { validateEmail, validateGoogleDriveLink } from "../../helpers";
import { config } from "../../config";
import TextInput from "../form/text-input";
import HashInput from "../form/hash-input";
import Button from "../form/button";
import { postTrain } from "../../api";
import Header from "../header";

const SectionTrain = () => {
  const group = createFormGroup({
    email: createFormControl("", {
      validators: (value) =>
        validateEmail(value)
          ? null
          : { errorMessage: "Email address is invalid" },
    }),
    googleDriveLink: createFormControl("", {
      validators: (value) =>
        validateGoogleDriveLink(value)
          ? null
          : {
              errorMessage: `There must be link on Google Drive folder`,
            },
    }),
    hash: createFormControl("", { readonly: true, disabled: true }),
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
    <>
      <Header text="Train" />
      <Wrapper>
        <Container>
          <Form>
            <div>
              <TextInput
                name={`googleDriveLink`}
                type={`text`}
                placeholder={`Google Drive folder`}
                control={group.controls.googleDriveLink}
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
    </>
  );
};

export default SectionTrain;

const Wrapper = styled("section")`
  display: flex;
  margin: 50px auto;
  justify-content: center;
`;

const Form = styled("form")``;

const Fieldset = styled("fieldset")`
  display: flex;
  bottom: 0;
  width: 350px;
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
