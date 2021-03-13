import React, { Suspense } from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";

const Container = styled.div`
  background-color: white;
`;

function App(): JSX.Element {
  return (
    <Container data-testid="app">
      <Suspense fallback="loading">
        <Navbar />
      </Suspense>
    </Container>
  );
}

export default App;
