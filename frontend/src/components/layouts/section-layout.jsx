import { styled } from 'solid-styled-components';
import Header from '../header';

const SectionLayoutWithSidebar = (props) => {
  return (
    <>
      <Header text={props.header} />
      <Wrapper>{props.children}</Wrapper>
    </>
  );
};

export default SectionLayoutWithSidebar;

const Wrapper = styled('section')`
  position: relative;
  justify-content: center;
  display: grid;
  gap: 32px;
  grid-template-columns: auto auto;
`;
