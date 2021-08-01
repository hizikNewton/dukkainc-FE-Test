import { Router, Redirect, Route, Switch } from "react-router-dom";
import { CreateEmployee, DetailEmployee, ListEmployee } from "./pages";

import { defaultTheme, GlobalStyle } from "./globalStyles";
import { ThemeProvider } from "styled-components";
import history from "./utils/history";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router history={history}>
        <GlobalStyle />
        <Switch>
          <Route
            path={["/", "/employee/new"]}
            exact
            component={CreateEmployee}
          />
          <Route path={"/employees"} component={ListEmployee} />
          <Route path={"/employee/:id"} component={DetailEmployee} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
