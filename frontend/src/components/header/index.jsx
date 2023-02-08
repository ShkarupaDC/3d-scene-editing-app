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

const Wrapper = styled("header")`
  display: flex;
  align-items: center;
  justify-content: end;
  height: var(--headerHeight);
  padding: 0 var(--outsidePadding);
`;
const Navigation = styled("nav")`
  display: flex;
  gap: 20px;
  a {
    font-weight: 400;
    display: block;
    font-size: var(--navLinkSize);
    font-weight: bold;
    text-decoration: none;
    color: var(--mainColor);
    &.active {
      pointer-events: none;
      &::after {
        content: "";
        display: block;
        height: 2px;
        background: var(--mainColor);
        width: 100%;
        transition: transform 0.25s;
      }
    }
    &:not(.active) {
      &::after {
        content: "";
        display: block;
        height: 2px;
        width: 100%;
        background: var(--thirdColor);
        transform: translateY(5px);
        opacity: 0;
        transition: transform 0.25s;
      }
      &:hover:after {
        opacity: 1;
        transform: translateY(0px);
      }
    }
  }
`;
