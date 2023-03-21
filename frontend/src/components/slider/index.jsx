import { createSignal, createEffect, on } from "solid-js";
import { styled } from "solid-styled-components";
import arrow from "../../assets/arrow.svg";

const Slider = (props) => {
  const [imageIndex, setImageIndex] = createSignal(0);

  // refs
  let buttonNext, buttonPrev;

  const imageList = () => props.imageList || [];
  createEffect(on(imageList, () => setImageIndex(0)));

  // disable arrows if no data after suppose handler
  createEffect(() => {
    const numImages = imageList().length;
    buttonPrev.disabled = true;
    buttonNext.disabled = true;
    if (imageIndex() !== 0) {
      buttonPrev.disabled = false;
    }
    if (imageIndex() < numImages - 1) {
      buttonNext.disabled = false;
    }
  });

  return (
    <Wrapper>
      <Image src={imageList()[imageIndex()]} />
      <Arrow
        type="button"
        class={`prev`}
        ref={buttonPrev}
        // eslint-disable-next-line solid/reactivity
        onClick={() => setImageIndex(imageIndex() - 1)}
      >
        <img src={arrow} />
      </Arrow>
      <Arrow
        type="button"
        class={`next`}
        ref={buttonNext}
        // eslint-disable-next-line solid/reactivity
        onClick={() => setImageIndex(imageIndex() + 1)}
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
