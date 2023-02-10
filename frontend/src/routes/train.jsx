import { styled } from "solid-styled-components";
import Button from "../components/form/button";
import InputEmail from "../components/form/input-email";
import InputHash from "../components/form/input-hash";
import Slider from "../components/slider";
import InputFile from "../components/form/input-file";

const Train = () => {
  // refs
  let email, files, hash, submit;

  // get from input file in feature
  const imagesList = [
    `https://silk-print.com.ua/webp/works/martin.webp`,
    `https://silk-print.com.ua/webp/works/avanguard.webp`,
    `https://silk-print.com.ua/webp/works/yacht.webp`,
  ];

  return (
    <Wrapper>
      <Slider imagesList={imagesList} />
      <Form>
        <div>
          <InputEmail ref={email} name={`email`} placeholder={`Email`} />
          <InputFile ref={files} name={`files`} placeholder={`Upload images`} />
        </div>
        <Fieldset>
          <InputHash ref={hash} name={`hash`} placeholder={`Hash`} />
          <Button
            ref={submit}
            name={`submit`}
            placeholder={`Train`}
            type={`submit`}
          />
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
