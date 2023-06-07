import { styled } from 'solid-styled-components';
import { createFormControl } from 'solid-forms';

import HashInput from '../form/inputs/hash-input';
import Button from '../form/button';
import Header from '../header';
import RadioInput from '../form/inputs/radio-input';
import SidebarLayout from '../layouts/sidebar-layout';
import { postEditAABB } from '../../helpers/api';
import { EditAABBViewer3d } from '../../helpers/3d-viewer';

const storage = localStorage;

const EditSection = () => {
  const region = createFormControl('outer');
  const experimentId = createFormControl('');

  const viewer = new EditAABBViewer3d();
  viewer.runLoop();

  const onSubmit = async () => {
    experimentId.setErrors(null);

    const email = storage.getItem('email');
    if (!email) {
      experimentId.setErrors({ message: 'Email is invalid!' });
      return;
    }
    if (!viewer.hasMesh) {
      experimentId.setErrors({ message: 'Mesh is missing!' });
      return;
    }
    try {
      const newExperimentId = await postEditAABB(
        email,
        experimentId.value,
        viewer.aabbArray,
        region.value === 'inner',
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
      <Header text='Edit scene with AABB' />
      <Wrapper>
        <div>{viewer.canvas}</div>
        <SidebarLayout>
          <div>
            <Header text={`Region`} sidebar />
            <Fieldset>
              <RadioInput
                name={`region-edit`}
                id={`region-edit-inner`}
                value={`inner`}
                placeholder={`Inner`}
                onChange={(event) => region.setValue(event.target.value)}
              />
              <RadioInput
                name={`region-edit`}
                id={`region-edit-outer`}
                value={`outer`}
                placeholder={`Outer`}
                checked
                onChange={(event) => region.setValue(event.target.value)}
              />
            </Fieldset>
            <Header text={`Load Experiment`} sidebar />
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
          </div>
          <Button
            bottom
            name={`apply`}
            placeholder={`Apply`}
            type={`button`}
            disabled={!experimentId.isValid}
            onClick={onSubmit}
          />
        </SidebarLayout>
      </Wrapper>
    </>
  );
};

export default EditSection;

const Wrapper = styled('section')`
  justify-content: center;
  display: grid;
  gap: 32px;
  grid-template-columns: auto auto;
`;

const Fieldset = styled('fieldset')`
  width: 256px;
`;
