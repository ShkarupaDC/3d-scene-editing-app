import { styled } from 'solid-styled-components';
import { createFormControl, createFormGroup } from 'solid-forms';

import TextInput from '../form/inputs/text-input';
import HashInput from '../form/inputs/hash-input';
import Button from '../form/button';
import Header from '../header';
import { postTrain } from '../../helpers/api';

const storage = localStorage;

const TrainSection = () => {
  const group = createFormGroup({
    dataURL: createFormControl(''),
    experimentId: createFormControl('', { readonly: true, disabled: true }),
  });
  const controls = () => group.controls;

  const onSubmit = async () => {
    const email = storage.getItem('email');
    if (!email) {
      controls().dataURL.patchErrors({ message: 'Email is invalid!' });
      return;
    }
    if (!controls().dataURL.isValid) {
      controls().dataURL.markTouched(true);
    } else {
      group.markPending(true);
      try {
        const experimentId = await postTrain(email, controls().dataURL.value);
        controls().experimentId.setValue(experimentId);
        controls().experimentId.markDisabled(false);
        group.markSubmitted(true);
      } catch (error) {
        controls().dataURL.patchErrors({ message: error.message });
      } finally {
        group.markPending(false);
      }
    }
  };

  return (
    <>
      <Header text='Train' />
      <Wrapper>
        <Container>
          <form>
            <div>
              <TextInput
                name={`dataURL`}
                type={`text`}
                placeholder={`Data URL`}
                control={controls().dataURL}
              />
            </div>
          </form>
          <Fieldset>
            <HashInput
              name={`experimentId`}
              placeholder={`Experiment ID`}
              control={controls().experimentId}
            />
            <Button
              name={`submit`}
              placeholder={`Train`}
              disabled={group.isPending}
              type={`button`}
              onClick={onSubmit}
            />
          </Fieldset>
        </Container>
      </Wrapper>
    </>
  );
};

export default TrainSection;

const Wrapper = styled('section')`
  display: flex;
  margin: 50px auto;
  justify-content: center;
`;

const Fieldset = styled('fieldset')`
  bottom: 0;
`;

const Container = styled('div')`
  width: 425px;
  position: relative;
`;
