import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
import { StyledNavLink, StyledList, TasksItem, AuthorItem } from "./styled";

const App = () => (
  <HashRouter>
    <nav>
      <StyledList>
        <TasksItem>
          <StyledNavLink to="/zadania">Zadania</StyledNavLink>
        </TasksItem>
        <AuthorItem>
          <StyledNavLink to="/autor">O autorze</StyledNavLink>
        </AuthorItem>
      </StyledList>

      <Switch>
        <Route path="/zadania/:id">
          <TaskPage />
        </Route>
        <Route path="/zadania">
          <TasksPage />
        </Route>
        <Route path="/autor">
          <AuthorPage />
        </Route>
        <Route path="/">
          <Redirect to="/zadania" />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);

export default App;
