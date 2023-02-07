import { Route, Routes, Navigate } from "@solidjs/router";
import Header from "./components/header";
import Edit from "./routes/edit";
import Train from "./routes/train";
import { createGlobalStyles } from "solid-styled-components";

const App = () => {
  const navLinks = [
    { name: `Train`, href: `/train` },
    { name: `Edit`, href: `/edit` },
  ];

  return (
    <>
      <GlobalStyle />
      <Header navLinks={navLinks} />
      <Routes>
        <Route path="/" element={<Navigate href={`/train`} />} />
        <Route path="/train" component={Train} />
        <Route path="/edit" component={Edit} />
      </Routes>
    </>
  );
};

export default App;

const GlobalStyle = createGlobalStyles`
:root {
  --mainColor: #333333;
  --secondaryColor: #cccccc;
  --thirdColor: #BB2222;
  --navLinkSize: 22px;
}`;
