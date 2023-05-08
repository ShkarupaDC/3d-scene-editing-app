import { styled } from "solid-styled-components";
import { createFormControl } from "solid-forms";

import HashInput from "../form/hash-input";
import Button from "../form/button";
import Header from "../header";
import { postEditAABB } from "../../helpers/api";
import { EditAABBViewer } from "../../helpers/renderer";

const storage = localStorage;

const EditSection = () => {
  const experimentId = createFormControl("");

  const viewer = new EditAABBViewer();
  viewer.runLoop();

  const onSubmit = async () => {
    const email = storage.getItem("email");
    if (!email) {
      experimentId.setErrors({ message: "Email is invalid!" });
      return;
    }
    if (!viewer.hasMesh) {
      experimentId.setErrors({ message: "Mesh is missing!" });
      return;
    }
    try {
      const newExperimentId = await postEditAABB(
        email,
        experimentId.value,
        viewer.aabbArray,
        false
      );
      experimentId.setValue(newExperimentId);
    } catch (error) {
      experimentId.setErrors({ message: error.message });
    }
  };

  const onLoadMesh = async () => {
    experimentId.setErrors(null);
    try {
      await viewer.setMesh(experimentId.value, true);
    } catch (error) {
      experimentId.setErrors({ message: error.message });
    }
  };

  return (
    <>
      <Header text="Edit scene" />
      <Wrapper>
        {/* <div>{getThreeDom()}</div> */}
        <div>{viewer.canvas}</div>
        <Sidebar>
          {" "}
          <Fieldset>
            <HashInput
              name={`experimentId`}
              placeholder={`Experiment Id`}
              control={experimentId}
            />
            <Button
              name={`submit`}
              placeholder={`Load`}
              type={`button`}
              onClick={onLoadMesh}
            />
          </Fieldset>
          <Button
            bottom
            name={`apply`}
            placeholder={`Apply`}
            type={`button`}
            disabled={!experimentId.isValid}
            onClick={onSubmit}
          />
          {/* <Fieldset>
            <TextInput type={`radio`} name={`inner`} placeholder={`Inner`} />
            <TextInput type={`radio`} name={`outer`} placeholder={`Outer`} />
          </Fieldset> */}
        </Sidebar>
      </Wrapper>
    </>
  );
};

export default EditSection;

const Wrapper = styled("section")`
  justify-content: center;
  display: grid;
  gap: 32px;
  grid-template-columns: auto auto;
`;

const Fieldset = styled("fieldset")`
  display: flex;
  width: 256px;
  .wrapper-input {
    width: 160px;
  }
  button {
    width: 96px;
  }
`;

const Sidebar = styled("div")`
  display: grid;
  grid-template-rows: 714px auto;
`;
