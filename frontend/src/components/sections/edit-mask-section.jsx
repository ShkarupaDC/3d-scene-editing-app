import { onMount, createSignal } from 'solid-js';
import { styled } from 'solid-styled-components';
import { createFormControl } from 'solid-forms';

import Header from '../header';
import HashInput from '../form/hash-input';
import TextInput from '../form/text-input';
import Button from '../form/button';
import {
  MaskTool,
  groupFiles,
  compareFileName,
  matchImageToCamera,
  readImage,
  readJSON,
} from '../../helpers/image-masks';
import { postEditImageMasks } from '../../helpers/api';

const storage = localStorage;

const EditMaskSection = () => {
  const inExperimentId = createFormControl('');
  const region = createFormControl('outer');
  const [images, setImages] = createSignal([]);
  const [cameras, setCameras] = createSignal([]);

  const [currentIdx, setCurrentIdx] = createSignal(0);
  let buttonNext, buttonPrev;
  let canvas, maskTool;

  const currentImage = () => images()[currentIdx()];
  const numImages = () => images().length;

  onMount(() => (maskTool = new MaskTool(canvas, 24)));

  const onLoadFiles = async (event) => {
    inExperimentId.setErrors(null);

    if (!event.target.files.length) {
      inExperimentId.setErrors({ message: 'Files are missing' });
      return;
    }
    const files = Array.from(event.target.files);

    const [cameraFiles, imageFiles] = groupFiles(files);
    const notMatched = matchImageToCamera(imageFiles, cameraFiles);
    if (notMatched.length) {
      inExperimentId.setErrors({
        message: `Camera JSON or image is missing for ${notMatched.join(
          ', ',
        )} files`,
      });
      return;
    }
    imageFiles.sort(compareFileName);
    cameraFiles.sort(compareFileName);

    const newImages = await Promise.all(imageFiles.map(readImage));
    const newCameras = await Promise.all(cameraFiles.map(readJSON));

    maskTool.reset();
    newImages.forEach((image) => maskTool.addMask(image.width, image.height));

    setCurrentIdx(0);
    maskTool.setMask(0);

    setImages(newImages);
    setCameras(newCameras);
  };

  const onSubmit = async () => {
    const email = storage.getItem('email');
    if (!email) {
      inExperimentId.setErrors({ message: 'Email is invalid!' });
      return;
    }
    if (!images().length) {
      inExperimentId.setErrors({ message: 'Images are missing' });
      return;
    }
    if (!inExperimentId.value.length) {
      inExperimentId.setErrors({ message: 'Base experiment id is missing' });
      return;
    }
    try {
      const masks = await maskTool.getMasks();
      const newExperimentId = await postEditImageMasks(
        email,
        inExperimentId.value,
        masks,
        cameras(),
        region.value === 'inner',
      );
      inExperimentId.setValue(newExperimentId);
    } catch (error) {
      inExperimentId.setErrors({ message: error.message });
    }
  };

  const onImageChange = (direction) => {
    if (numImages() === 0) {
      return;
    }
    const nextIdx = Math.max(
      0,
      Math.min(currentIdx() + direction, numImages() - 1),
    );
    if (currentIdx() === nextIdx) {
      return;
    }
    setCurrentIdx(nextIdx);
    buttonPrev.disabled = currentIdx() === 0;
    buttonNext.disabled = currentIdx() === Math.max(0, numImages() - 1);
    maskTool.setMask(currentIdx());
  };

  return (
    <>
      <Header text="Edit scene" />
      <Wrapper>
        <Canvas ref={canvas} />
        {images().length ? (
          <ImageHTML
            src={currentImage().src}
            width={currentImage.width}
            height={currentImage.height}
          />
        ) : (
          <></>
        )}
        <Arrow
          type="button"
          ref={buttonPrev}
          id={'buttonPrev'}
          onClick={() => onImageChange(-1)}
        >
          {'<'}
        </Arrow>
        <Arrow
          type="button"
          ref={buttonNext}
          id={'buttonNext'}
          onClick={() => onImageChange(1)}
        >
          {'>'}
        </Arrow>
      </Wrapper>
      <input
        type={`file`}
        id={`files`}
        name={`files`}
        onInput={onLoadFiles}
        accept="image/*,application/json"
        multiple
      />
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
      <Fieldset left>
        <HashInput
          name={`experimentId`}
          placeholder={`Experiment Id`}
          control={inExperimentId}
        />
        <Button
          name={`apply`}
          placeholder={`Apply`}
          type={`button`}
          // disabled={!inExperimentId.isValid}
          onClick={onSubmit}
        />
      </Fieldset>
    </>
  );
};

export default EditMaskSection;

const Wrapper = styled.div`
  aspect-ratio: 1/1;
  position: relative;
`;

const Canvas = styled.canvas`
  cursor: crosshair;
  position: absolute;
  left: 0;
  top: 0;
  outline: 1px solid #212121;
  z-index: 1000;
  opacity: 0.4;
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

const ImageHTML = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 500;
`;

const Arrow = styled('button')`
  z-index: 1500;
  position: absolute;
  display: block;
  top: calc(50% - 30px / 2);
  width: 30px;
  height: 30px;
  padding: 0;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  transition: opacity linear 0.25s;
  background-color: var(--mainColor);
  &:not(:disabled):hover {
    opacity: 1;
  }
  &:disabled {
    visibility: hidden;
  }
  &#buttonPrev {
    left: -30px;
    img {
      transform: scaleX(-1);
    }
  }
  &#buttonNext {
    right: -30px;
  }
`;
