import { createSignal, createEffect } from "solid-js";
import { styled } from "solid-styled-components";
import arrow from "../../assets/arrow.svg";

const Slider = (props) => {
  // useState
  const [imageIndex, setImageIndex] = createSignal(0);

  // refs
  let buttonNext, buttonPrev;

  // It will be in props in feature
  const imagesList = [
    `https://silk-print.com.ua/webp/works/martin.webp`,
    `https://silk-print.com.ua/webp/works/avanguard.webp`,
    `https://silk-print.com.ua/webp/works/yacht.webp`,
  ];

  // disable arrows if no data after suppose handler
  createEffect(() => {
    // button prev instead of index === 0
    if (imageIndex() === 0) {
      buttonPrev.disabled = true;
    } else {
      buttonPrev.disabled = false;
    }

    // button next instead of last index
    if (imageIndex() === imagesList.length - 1) {
      buttonNext.disabled = true;
    } else {
      buttonNext.disabled = false;
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
      <Image src={imagesList[imageIndex()]} />
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
  overflow: hidden;
  display: flex;
  aspect-ratio: 4 / 3;
  background: var(--secondaryColor);
  position: relative;
`;

const Image = styled("img")`
  max-width: 100%;
  max-height: 100%;
  justify-self: center;
  align-self: center;
`;

const Arrow = styled("button")`
  position: absolute;
  display: flex;
  top: calc(50% - 30px / 2);
  width: 30px;
  height: 30px;
  padding: 0;
  border: none;
  cursor: pointer;
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
