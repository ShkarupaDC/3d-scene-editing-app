import { For } from "solid-js";
import { styled } from "solid-styled-components";
import NavLink from "./nav-link";

const Header = (props) => {
  const navLinks = () => props.navLinks;
  return (
    <Wrapper>
      <Navigation>
        <For each={navLinks()}>
          {({ name, href }) => <NavLink name={name} href={href} />}
        </For>
      </Navigation>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled("div")``;
const Navigation = styled("div")``;
