import { Route, Routes, Navigate } from "@solidjs/router";
import Header from "./components/header";
import Edit from "./routes/edit";
import Train from "./routes/train";
import { createGlobalStyles, styled } from "solid-styled-components";
import Dexie from "dexie";

const App = () => {
  const navLinks = [
    { name: `Train`, href: `/train` },
    { name: `Edit`, href: `/edit` },
  ];

  const db = new Dexie("filesDataBase");

  return (
    <>
      <GlobalStyle />
      <Header navLinks={navLinks} />
      <Content>
        <Routes>
          <Route path="/" element={<Navigate href={`/train`} />} />
          <Route path="/train" element={<Train db={db} />} />
          <Route path="/edit" component={Edit} />
        </Routes>
      </Content>
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
  --headerHeight: 60px;
  --outsidePadding: 60px;
}`;

const Content = styled("section")`
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - var(--headerHeight));
  width: calc(100% - 2 * var(--outsidePadding));
`;
