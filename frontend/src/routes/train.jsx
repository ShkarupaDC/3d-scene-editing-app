import { createEffect, createSignal } from "solid-js";
import { createStore } from "solid-js/store";
import { styled } from "solid-styled-components";
import Button from "../components/form/button";
import InputEmail from "../components/form/input-email";
import InputHash from "../components/form/input-hash";
import Slider from "../components/slider";
import InputFile from "../components/form/input-file";
import { getFilesUrls } from "../helpers/getFilesUrl";

const Train = () => {
  // store of data from inputs of form
  const [formData, setFormData] = createStore({
    email: "",
    files: [],
    hash: "",
  });

  // use state images urls
  const [imagesList, setImagesList] = createSignal([]);

  // set form data when inputs changed
  const handleFormChange = (e) => {
    const { target } = e;
    setFormData(() => {
      switch (target.type) {
        case `email` || `text`:
          return { [target.name]: target.value };
        case `file`:
          return { [target.name]: target.files };
        default:
          return;
      }
    });
  };

  // set images urls when input file is updated
  createEffect(() => {
    setImagesList(getFilesUrls(formData.files));
  });

  return (
    <Wrapper>
      <Slider imagesList={imagesList()} />
      <Form onChange={handleFormChange}>
        <div>
          <InputEmail
            name={`email`}
            placeholder={`Email`}
            defaultValue={formData.email}
          />
          <InputFile
            name={`files`}
            placeholder={`Upload images`}
            defaultFiles={formData.files}
          />
        </div>
        <Fieldset>
          <InputHash
            name={`hash`}
            placeholder={`Hash`}
            defaultValue={formData.hash}
          />
          <Button name={`submit`} placeholder={`Train`} type={`submit`} />
        </Fieldset>
      </Form>
    </Wrapper>
  );
};

export default Train;

const Wrapper = styled("section")`
  display: flex;
  gap: var(--outsidePadding);
`;

const Form = styled("form")`
  width: 350px;
  position: relative;
`;

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
