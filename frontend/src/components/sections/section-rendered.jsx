import { styled } from "solid-styled-components";
import Header from "../header";
import Button from "../form/button";
import HashInput from "../form/hash-input";
import { createFormControl, createFormGroup } from "solid-forms";

const SectionRendered = () => {
  const group = createFormGroup({
    imageID: createFormControl(""),
  });
  return (
    <>
      <Header text="Rendered Image" />
      <Wrapper>
        <ImageContainer>
          <img src="https://www.imgonline.com.ua/examples/bee-on-daisy.jpg" />
        </ImageContainer>
        <Sidebar>
          <Fieldset>
            <HashInput
              name={`image`}
              placeholder={`Image ID`}
              control={group.controls.hash}
            />
            <Button name={`submit`} placeholder={`Load`} type={`button`} />
          </Fieldset>
          <Button name={`apply`} placeholder={`Download`} type={`button`} />
        </Sidebar>
      </Wrapper>
    </>
  );
};

export default SectionRendered;

const Wrapper = styled("div")`
  justify-content: center;
  display: grid;
  grid-template-columns: 1000px 256px;
  gap: 32px;
`;

const Fieldset = styled("fieldset")`
  display: flex;
  width: 100%;
  input {
    width: 192px;
  }
  button {
    width: 66px;
  }
`;

const Sidebar = styled("div")`
  display: flex;
  align-self: baseline;
  flex-wrap: wrap;
  gap: 32px;
`;

const ImageContainer = styled("div")`
  width: 100%;
  aspect-ratio: 4/3;
  background-color: var(--secondaryColor);
  img {
    display: flex;
    width: 100%;
    aspect-ratio: 4/3;
  }
`;
