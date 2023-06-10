import { styled } from 'solid-styled-components';

const Header = (props) => {
  return (
    <Wrapper sidebar={props.sidebar}>
      <h3>{props.text}</h3>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled('header')`
  display: block;
  text-align: start;
  height: ${(props) => (props.sidebar ? '22px' : '32px')};
  font-size: ${(props) => (props.sidebar ? '14px' : '18px')};
  border-bottom: 1px solid var(--secondaryColor);
  margin: ${(props) => (props.sidebar ? '0 0 16px' : '64px 0 32px')};
  h3 {
    margin: 0;
  }
`;
