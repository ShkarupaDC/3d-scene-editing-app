import { createEffect, createSignal } from "solid-js";
import { createStore } from "solid-js/store";
import { styled } from "solid-styled-components";
import Button from "../components/form/button";
import InputEmail from "../components/form/email-input";
import InputHash from "../components/form/hash-input";
import Slider from "../components/slider";
import InputFile from "../components/form/file-input";
import { getFilesUrls } from "../helpers/getFilesUrl";
import { validateEmail } from "../helpers/validation";

const Train = () => {
  // store of data from inputs of form
  const [formData, setFormData] = createStore({
    email: "",
    files: [],
  });

  // store of errors inputs of form
  const [formErrors, setFormErrors] = createStore({
    email: "",
    files: "",
  });

  const [hash, setHash] = createSignal("");

  const [imagesList, setImagesList] = createSignal([]);

  // set form data when inputs changed
  const handleFormChange = (event) => {
    const { target } = event;
    setFormData(() => {
      if (target.type === `file`) {
        return { [target.name]: target.files };
      } else {
        return { [target.name]: target.value };
      }
    });
  };

  createEffect(() => {
    const isValidEmail = validateEmail(formData.email);
    const isValidFiles = formData.files.length > 10;
    if (isValidEmail) {
      setFormErrors({ email: "" });
    }

    if (isValidFiles) {
      setFormErrors({ files: "" });
    }
  });

  const handleFormSubmit = async () => {
    const isValidEmail = validateEmail(formData.email);
    const isValidFiles = formData.files.length > 10;

    // validate
    if (isValidEmail && isValidFiles) {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/scene-representation.json`
      );
      const { hash } = await res.json();
      setHash(hash);
    } else {
      if (!isValidEmail) {
        setFormErrors({ email: "Email is not valid" });
      }
      if (!isValidFiles) {
        setFormErrors({ files: "Files must be more than 10" });
      }
    }
  };

  // set images urls when input file is updated
  createEffect(() => {
    setImagesList(getFilesUrls(formData.files));
  });

  return (
    <Wrapper>
      <Slider imagesList={imagesList()} />
      <Container>
        <Form onInput={handleFormChange}>
          <div>
            <InputEmail
              name={`email`}
              placeholder={`Email`}
              defaultValue={formData.email}
              errorMessage={formErrors.email}
            />
            <InputFile
              name={`files`}
              placeholder={`Upload images`}
              defaultFiles={formData.files}
              errorMessage={formErrors.files}
            />
          </div>
        </Form>
        <Fieldset>
          <InputHash name={`hash`} placeholder={`Hash`} value={hash()} />
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
