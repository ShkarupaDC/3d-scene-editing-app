import { createFormControl } from 'solid-forms';
import { createSignal } from 'solid-js';
import { styled } from 'solid-styled-components';

import HashInput from '../form/hash-input';
import Button from '../form/button';
import Header from '../header';
import { getRendering } from '../../helpers/api';

const RenderingSection = () => {
  const [imageSrc, setImageSrc] = createSignal('');
  const experimentId = createFormControl('');
  let imageRef;

  const fetchRendering = async () => {
    if (!experimentId.isValid) {
      return;
    }
    try {
      const renderingURL = await getRendering(experimentId.value);
      setImageSrc(renderingURL);
    } catch (error) {
      experimentId.patchErrors({ message: error.message });
    }
  };
  return (
    <>
      <Header text="Rendered Image" />
      <Wrapper>
        <ImageContainer
          href={imageSrc()}
          ref={imageRef}
          download={'rendering.png'}
        >
          <img src={imageSrc()} />
        </ImageContainer>
        <Sidebar>
          <Fieldset>
            <HashInput
              name={`image`}
              placeholder={`Experiment Id`}
              control={experimentId}
            />
            <Button
              name={`submit`}
              placeholder={`Load`}
              type={`button`}
              onClick={fetchRendering}
            />
          </Fieldset>
          <Button
            name={`apply`}
            placeholder={`Download`}
            type={`button`}
            onClick={() => imageRef.click()}
          />
        </Sidebar>
      </Wrapper>
    </>
  );
};

export default RenderingSection;

const Wrapper = styled('div')`
  justify-content: center;
  display: grid;
  grid-template-columns: 1000px 256px;
  gap: 32px;
`;

const Fieldset = styled('fieldset')`
  display: flex;
  width: 100%;
  input {
    width: 192px;
  }
  button {
    width: 66px;
  }
`;

const Sidebar = styled('div')`
  display: flex;
  align-self: baseline;
  flex-wrap: wrap;
  gap: 32px;
`;

const ImageContainer = styled('a')`
  width: 100%;
  aspect-ratio: 4/3;
  background-color: var(--secondaryColor);
  img {
    display: flex;
    width: 100%;
    /* aspect-ratio: 4/3; */
  }
`;
