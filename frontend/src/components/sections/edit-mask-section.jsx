import { onMount, createSignal } from 'solid-js';
import { styled } from 'solid-styled-components';
import { createFormControl } from 'solid-forms';
import arrow from '../../assets/arrow.svg';

import Header from '../header';
import HashInput from '../form/inputs/hash-input';
import FileInput from '../form/inputs/file-input';
import RadioInput from '../form/inputs/radio-input';
import SectionLayoutWithSidebar from '../layouts/section-layout';
import SidebarLayout from '../layouts/sidebar-layout';
import Button from '../form/button';
import {
  Cursor,
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
  let canvas, cursor, maskTool;

  const currentImage = () => images()[currentIdx()];
  const numImages = () => images().length;

  onMount(() => (maskTool = new MaskTool(canvas, new Cursor(cursor), 24)));

  const onLoadFiles = async (event) => {
    inExperimentId.setErrors(null);
    setImages([]);
    setCameras([]);
    maskTool.reset();

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
    newImages.forEach((image) => maskTool.addMask(image.width, image.height));

    setCurrentIdx(0);
    maskTool.setMask(0);

    setImages(newImages);
    setCameras(newCameras);
    onImageChange(0);
  };

  const onSubmit = async () => {
    inExperimentId.setErrors(null);

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
    setCurrentIdx(nextIdx);
    buttonPrev.disabled = currentIdx() === 0;
    buttonNext.disabled = currentIdx() === Math.max(0, numImages() - 1);
    maskTool.setMask(currentIdx());
  };

  return (
    <SectionLayoutWithSidebar header={`Edit scene with image masks`}>
      <WorkArea>
        <CursorHTML ref={cursor} />
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
          type='button'
          ref={buttonPrev}
          id={'buttonPrev'}
          onClick={() => onImageChange(-1)}
        >
          <img src={arrow} />
        </Arrow>
        <Arrow
          type='button'
          ref={buttonNext}
          id={'buttonNext'}
          onClick={() => onImageChange(1)}
        >
          <img src={arrow} />
        </Arrow>
      </WorkArea>
      <SidebarLayout>
        <div>
          <Header text={`Region`} sidebar />
          <Fieldset>
            <RadioInput
              name={`region-edit-mask`}
              id={`region-edit-mask-inner`}
              value={`inner`}
              placeholder={`Inner`}
              onChange={(event) => region.setValue(event.target.value)}
            />
            <RadioInput
              name={`region-edit-mask`}
              id={`region-edit-mask-outer`}
              value={`outer`}
              placeholder={`Outer`}
              checked
              onChange={(event) => region.setValue(event.target.value)}
            />
          </Fieldset>
          <Header text={`Load files`} sidebar />
          <FileInput
            id={`files`}
            name={`files`}
            onInput={onLoadFiles}
            accept='image/*,application/json'
            multiple
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
      </SidebarLayout>
    </SectionLayoutWithSidebar>
  );
};

export default EditMaskSection;

const WorkArea = styled('div')`
  position: relative;
  justify-content: center;
  width: 1000px;
  min-height: 800px;
  height: fit-content;
`;

const CursorHTML = styled.span`
  display: none;
  border: 1px solid #212121;
  border-radius: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
  z-index: 750;
  opacity: 0.4;
`;

const Canvas = styled.canvas`
  position: absolute;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  cursor: none;
  outline: none;
  z-index: 1000;
  opacity: 0.4;
`;

const Fieldset = styled('fieldset')`
  width: 256px;
`;

const ImageHTML = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
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
  color: white;
  &:not(:disabled):hover {
    opacity: 1;
  }
  &:disabled {
    visibility: hidden;
  }
  &#buttonPrev {
    left: 30px;
    img {
      transform: scaleX(-1);
    }
  }
  &#buttonNext {
    right: 30px;
  }
  img {
    vertical-align: middle;
    margin: auto;
    width: 35%;
  }
`;
