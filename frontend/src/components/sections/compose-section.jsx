import { styled } from 'solid-styled-components';
import { createFormControl, createFormArray, bindOwner } from 'solid-forms';
import { For, Show } from 'solid-js';

import HashInput from '../form/inputs/hash-input';
import Button from '../form/button';
import Header from '../header';
import { ComposeViewer3d } from '../../helpers/3d-viewer';
import { postRender } from '../../helpers/api';
import SectionLayoutWithSidebar from '../layouts/section-layout';
import SidebarLayout from '../layouts/sidebar-layout';

const MAX_EXPERIMENTS = 5;

const storage = localStorage;

const ComposeSection = () => {
  const inExperimentId = createFormControl('');
  const outExperimentId = createFormControl('');
  const experiments = createFormArray([]);

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
    const meshId = experimentControl.data['meshId'];
    viewer.removeMesh(meshId);
    experiments.removeControl(index());
    inExperimentId.setErrors(null);
  };

  const onSubmit = async () => {
    const email = storage.getItem('email');
    if (!email) {
      outExperimentId.setErrors({ message: 'Email is invalid!' });
      return;
    }
    if (!experiments.size) {
      outExperimentId.setErrors({ message: 'There are no scenes to compose' });
      return;
    }
    try {
      const scenes = [];
      for (const control of experiments.controls) {
        scenes.push({
          experiment_id: control.value,
          T: viewer.getMeshTransformMatrix(control.data['meshId']),
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
        camera,
      );
      outExperimentId.setValue(newExperimentId);
    } catch (error) {
      outExperimentId.setErrors({ message: error.message });
    }
  };

  return (
    <SectionLayoutWithSidebar header={`Compose scenes`}>
      <div>{viewer.canvas}</div>
      <SidebarLayout>
        <div>
          <Header text='Add experiment' sidebar />
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
            <Header text='Experiments' sidebar />
            <Fieldsets>
              <For each={experiments.controls}>
                {(experimentControl, index) => (
                  <Fieldset>
                    <HashInput
                      name={`experimentId_${index()}`}
                      placeholder={`Experiment Id`}
                      control={experimentControl}
                      showError={false}
                      disabled
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
      </SidebarLayout>
    </SectionLayoutWithSidebar>
  );
};

export default ComposeSection;

const Fieldset = styled('fieldset')`
  width: 256px;
`;

const Fieldsets = styled('fieldset')`
  display: block;
  row-gap: 24px;
  flex-wrap: wrap;
`;
