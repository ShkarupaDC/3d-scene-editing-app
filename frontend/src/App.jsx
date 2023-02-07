import { Route, Routes } from "@solidjs/router";
import { styled } from "solid-styled-components";
import Header from "./components/header";
import Edit from "./routes/edit";
import Train from "./routes/train";

const App = () => {
  const navLinks = [
    { name: `Train`, href: `/` },
    { name: `Edit`, href: `/edit` },
  ];
  return (
    <>
      <Header navLinks={navLinks} />
      <Routes>
        <Route path="/" component={Train} />
        <Route path="/edit" component={Edit} />
      </Routes>
    </>
  );
};

export default App;

const Wrapper = styled("div")``;
