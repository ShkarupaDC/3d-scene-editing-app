import { styled } from 'solid-styled-components';
import { createFormControl } from 'solid-forms';

import HashInput from '../form/hash-input';
import TextInput from '../form/text-input';
import Button from '../form/button';
import Header from '../header';
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
      <Header text="Edit scene" />
      <Wrapper>
        <div>{viewer.canvas}</div>
        <Sidebar>
          <div>
            {/* onChange={(event) => region.setValue(event.target.value)} */}
            <TextInput
              type={`radio`}
              name={`region`}
              value={`inner`}
              placeholder={`Inner`}
              onChange={(event) => region.setValue(event.target.value)}
            />
            <TextInput
              type={`radio`}
              name={`region`}
              value={`outer`}
              placeholder={`Outer`}
              checked
              onChange={(event) => region.setValue(event.target.value)}
            />
          </div>
        </Sidebar>
        <Fieldset left>
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
          name={`apply`}
          placeholder={`Apply`}
          type={`button`}
          disabled={!experimentId.isValid}
          onClick={onSubmit}
        />
      </Wrapper>
    </>
  );
};

export default EditSection;

const Wrapper = styled('section')`
  justify-content: center;
  display: grid;
  grid-template-columns: 1000px 256px;
  gap: 32px;
`;

const Fieldset = styled('fieldset')`
  display: ${(props) => (props.left ? 'flex' : 'block')};
  width: ${(props) => (props.left ? '1000px' : '96px')};
  input {
    width: ${(props) => (props.left ? '872px' : '96px')};
  }
  button {
    width: 128px;
  }
`;

const Sidebar = styled('div')`
  display: grid;
  grid-template-columns: auto auto;
`;
