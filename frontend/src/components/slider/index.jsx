import { createSignal, createEffect, on } from "solid-js";
import { styled } from "solid-styled-components";
import arrow from "../../assets/arrow.svg";

const Slider = (props) => {
  // useState
  const [imageIndex, setImageIndex] = createSignal(0);

  // refs
  let buttonNext, buttonPrev;

  // It will be in props in feature
  const imageList = () => props.imageList || [];

  createEffect(on(imageList, () => setImageIndex(0)));

  // disable arrows if no data after suppose handler
  createEffect(() => {
    const numImages = imageList().length;
    // disabled both buttons if no-data or one image in data
    if (numImages <= 1) {
      buttonNext.disabled = true;
      buttonPrev.disabled = true;
    } else {
      switch (imageIndex()) {
        // if index === 0 button prev is disabled
        case 0:
          buttonPrev.disabled = true;
          buttonNext.disabled = false;
          break;
        // if index === last index button nex is disabled
        case numImages - 1:
          buttonPrev.disabled = false;
          buttonNext.disabled = true;
          break;
        // show both buttons
        default:
          buttonPrev.disabled = false;
          buttonNext.disabled = false;
      }
    }
  });

  // onClick arrow next
  const handlerNextImage = () => {
    setImageIndex(imageIndex() + 1);
  };

  // onClick arrow prev
  const handlerPrevImage = () => {
    setImageIndex(imageIndex() - 1);
  };

  return (
    <Wrapper>
      <Image src={imageList()[imageIndex()]} />
      <Arrow
        type="button"
        class={`prev`}
        ref={buttonPrev}
        onClick={handlerPrevImage}
      >
        <img src={arrow} />
      </Arrow>
      <Arrow
        type="button"
        class={`next`}
        ref={buttonNext}
        onClick={handlerNextImage}
      >
        <img src={arrow} />
      </Arrow>
    </Wrapper>
  );
};

export default Slider;

const Wrapper = styled("div")`
  width: 678px;
  display: flex;
  aspect-ratio: 4 / 3;
  background: var(--secondaryColor);
  position: relative;
  justify-content: center;
  align-content: center;
`;

const Image = styled("img")`
  max-width: 100%;
  max-height: 100%;
`;

const Arrow = styled("button")`
  position: absolute;
  display: flex;
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
  &.prev {
    left: 0;
    img {
      transform: scaleX(-1);
    }
  }
  &.next {
    right: 0;
  }
`;
