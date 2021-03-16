import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Check from "./components/Check";
import Form from "./components/form/Form";
import UserData from "./components/UserData";

const Container = styled.div`
  background: white;
`;

function App(): JSX.Element {
  return (
    <Suspense fallback="loading">
      <Container data-testid="app">
        <Router>
          <Switch>
            <Route exact path="/">
              <Form />
            </Route>
            <Route path="/user-data">
              <UserData />
            </Route>
            <Route path="/check">
              <Check />
            </Route>
          </Switch>
        </Router>
      </Container>
    </Suspense>
  );
}

export default App;
