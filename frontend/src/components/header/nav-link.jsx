import { A } from "@solidjs/router";

const NavLink = (props) => {
  return <A href={props.href}>{props.name}</A>;
};

export default NavLink;
