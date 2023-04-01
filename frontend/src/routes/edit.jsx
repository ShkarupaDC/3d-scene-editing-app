import { styled } from "solid-styled-components";
import { createFormControl, createFormGroup } from "solid-forms";
import Scene from "../components/scene";
import HashInput from "../components/form/hash-input";
import Button from "../components/form/button";

const Edit = () => {
  const group = createFormGroup({
    hash: createFormControl(""),
  });

  return (
    <Wrapper>
      <Scene />
      <Fieldset>
        <HashInput
          name={`hash`}
          placeholder={`Hash`}
          control={group.controls.hash}
        />
        <Button name={`submit`} placeholder={`Train`} type={`button`} />
      </Fieldset>
    </Wrapper>
  );
};

export default Edit;

const Wrapper = styled("section")`
  display: grid;
  gap: 32px;
`;

const Fieldset = styled("fieldset")`
  display: flex;
  width: 512px;
  input {
    width: 384px;
  }
  button {
    width: 128px;
  }
`;
