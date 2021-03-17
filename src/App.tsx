import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Check from "./components/check/check";
import Form from "./components/contribution-form/form";
import UserData from "./components/user-data/user-data";

const Container = styled.div`
  background: white;
`;

const App = (): JSX.Element => {
  return (
    <Suspense fallback="loading">
      <Container>
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
};

export default App;
