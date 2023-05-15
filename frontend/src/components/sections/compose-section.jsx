import { styled } from "solid-styled-components";
import { createFormControl, createFormArray, bindOwner } from "solid-forms";
import { For, Show } from "solid-js";

import HashInput from "../form/hash-input";
import Button from "../form/button";
import Header from "../header";
import { ComposeViewer3d } from "../../helpers/3d-viewer";
import { postRender } from "../../helpers/api";

const MAX_EXPERIMENTS = 5;

const storage = localStorage;

const ComposeSection = () => {
  const inExperimentId = createFormControl("");
  const outExperimentId = createFormControl("");
  const experiments = createFormArray(["111", "123"]);

  const viewer = new ComposeViewer3d();
  viewer.runLoop();

  const onLoadMesh = async () => {
    inExperimentId.setErrors(null);
    if (experiments.size == MAX_EXPERIMENTS) {
      inExperimentId.setErrors({
        message: `The maximum number of experiments is ${MAX_EXPERIMENTS}`,
      });
      return;
    }
    try {
      const meshId = await viewer.addMesh(inExperimentId.value);
      const control = createFormControl(inExperimentId.value, {
        data: { meshId },
        readonly: true,
      });
      experiments.push(control);
      inExperimentId.setValue(null);
    } catch (error) {
      inExperimentId.setErrors({ message: error.message });
    }
  };

  const onRemoveMesh = (experimentControl, index) => {
    const meshId = experimentControl.data["meshId"];
    viewer.removeMesh(meshId);
    experiments.removeControl(index());
    inExperimentId.setErrors(null);
  };

  const onSubmit = async () => {
    const email = storage.getItem("email");
    if (!email) {
      outExperimentId.setErrors({ message: "Email is invalid!" });
      return;
    }
    if (!experiments.size) {
      outExperimentId.setErrors({ message: "There are no scenes to compose" });
      return;
    }
    try {
      const scenes = [];
      for (const control of experiments.controls) {
        scenes.push({
          experiment_id: control.value,
          T: viewer.getMeshTransformMatrix(control.data["meshId"]),
        });
      }
      const camera = {
        fx: viewer.cameraFocalLength, // 1111
        fy: viewer.cameraFocalLength, // 1111
        camera2world: viewer.cameraExtrinsics, // 800, 800
      };
      const newExperimentId = await postRender(
        email,
        scenes,
        viewer.imageSize,
        camera
      );
      outExperimentId.setValue(newExperimentId);
    } catch (error) {
      outExperimentId.setErrors({ message: error.message });
    }
  };

  return (
    <>
      <Header text="Compose scenes" />
      <Wrapper>
        <div>{viewer.canvas}</div>
        <Sidebar>
          <div>
            <Header text="Add experiment" sidebar />
            <Fieldset>
              <HashInput
                name={`experimentId`}
                placeholder={`Experiment Id`}
                control={inExperimentId}
              />
              <Button
                name={`submit`}
                placeholder={`Load`}
                type={`button`}
                onClick={bindOwner(onLoadMesh)}
              />
            </Fieldset>
            <Show when={!!experiments.value.length}>
              <Header text="Experiments" sidebar />
              <Fieldsets>
                <For each={experiments.controls}>
                  {(experimentControl, index) => (
                    <Fieldset>
                      <HashInput
                        withoutMessage={true}
                        name={`experimentId_${index()}`}
                        placeholder={`Experiment Id`}
                        control={experimentControl}
                      />
                      <Button
                        name={`submit`}
                        placeholder={`Remove`}
                        type={`button`}
                        onClick={() => onRemoveMesh(experimentControl, index)}
                      />
                    </Fieldset>
                  )}
                </For>
              </Fieldsets>
            </Show>
          </div>
          <div>
            <Fieldset>
              <HashInput
                name={`experimentId`}
                placeholder={`Experiment Id`}
                control={outExperimentId}
              />
              <Button
                name={`submit`}
                placeholder={`Render`}
                type={`button`}
                disabled={!inExperimentId.isValid}
                onClick={onSubmit}
              />
            </Fieldset>
          </div>
        </Sidebar>
      </Wrapper>
    </>
  );
};

export default ComposeSection;

const Wrapper = styled("section")`
  justify-content: center;
  display: grid;
  grid-template-columns: 1000px 256px;
  gap: 32px;
`;

const Fieldset = styled("fieldset")`
  width: 256px;
`;

const Fieldsets = styled("fieldset")`
  display: flex;
  row-gap: 24px;
  flex-wrap: wrap;
`;

const Sidebar = styled("div")`
  display: grid;
  grid-template-rows: 714px auto;
`;
