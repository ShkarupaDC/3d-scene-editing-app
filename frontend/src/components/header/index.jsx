import { styled } from "solid-styled-components";

const Header = (props) => {
  return (
    <Wrapper>
      <h3>{props.text}</h3>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled("header")`
  display: block;
  text-align: end;
  height: 32px;
  border-bottom: 1px solid var(--secondaryColor);
  margin: 64px 0 32px;
`;
