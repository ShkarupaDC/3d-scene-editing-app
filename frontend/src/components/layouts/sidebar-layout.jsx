import { styled } from 'solid-styled-components';

const SidebarLayout = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default SidebarLayout;

const Wrapper = styled('div')`
  display: grid;
  grid-template-rows: 714px auto;
  fieldset {
    margin-bottom: 32px;
  }
`;
