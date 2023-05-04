import { createGlobalStyles, styled } from "solid-styled-components";
import IndexPage from "./pages";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Content>
        <IndexPage />
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
  --errorMessageSize: 24px;
  --outsidePadding: 64px;
}`;

const Content = styled("section")`
  margin: 64px auto;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - var(--headerHeight));
  width: calc(100% - 2 * var(--outsidePadding));
`;
