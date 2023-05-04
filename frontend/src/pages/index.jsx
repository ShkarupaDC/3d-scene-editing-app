import { createFormControl, createFormGroup } from "solid-forms";
import TextInput from "../components/form/text-input";
import SectionEdit from "../components/sections/section-edit";
import SectionTrain from "../components/sections/section-train";
import { validateEmail } from "../helpers";
import { styled } from "solid-styled-components";
import Header from "../components/header";
import SectionCompose from "../components/sections/section-compose";
import SectionRendered from "../components/sections/section-rendered";

const IndexPage = () => {
  const group = createFormGroup({
    email: createFormControl("", {
      validators: (value) =>
        validateEmail(value)
          ? null
          : { errorMessage: "Email address is invalid" },
    }),
  });
  return (
    <>
      <Header text="Enter Email" />
      <Fieldset>
        <TextInput
          name={`email`}
          placeholder={`Email`}
          control={group.controls.email}
        />
      </Fieldset>
      <SectionTrain />
      <SectionEdit />
      <SectionCompose />
      <SectionRendered />
    </>
  );
};

export default IndexPage;

const Fieldset = styled("fieldset")`
  display: flex;
  justify-content: center;
  input {
    width: 350px;
  }
`;
