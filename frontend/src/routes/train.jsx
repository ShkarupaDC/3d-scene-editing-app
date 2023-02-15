import { createEffect, createResource, createSignal } from "solid-js";
import { createStore } from "solid-js/store";
import { styled } from "solid-styled-components";
import Button from "../components/form/button";
import InputEmail from "../components/form/email-input";
import InputHash from "../components/form/hash-input";
import Slider from "../components/slider";
import InputFile from "../components/form/file-input";
import { getFilesUrls } from "../helpers/getFilesUrl";

const fetchFormData = async (formData) => {
  await fetch(
    `${import.meta.env.VITE_API_URL}/scene-representation.json`
  ).tojson();
};

const Train = () => {
  // store of data from inputs of form
  const [formData, setFormData] = createStore({
    email: "",
    files: [],
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

  // set images urls when input file is updated
  createEffect(() => {
    setImagesList(getFilesUrls(formData.files));
  });

  return (
    <Wrapper>
      <Slider imagesList={imagesList()} />
      <Container>
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
        </Form>
        <Fieldset>
          <InputHash name={`hash`} placeholder={`Hash`} defaultValue={hash()} />
          <Button
            name={`submit`}
            placeholder={`Train`}
            type={`button`}
            onClick={() => {
              console.log(formData);
              setHash(createResource(formData, fetchFormData).hash);
            }}
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
