import { Router, Redirect, Route, Switch } from "react-router-dom";
import { CreateEmployee, DetailEmployee, ListEmployee } from "./pages";
import history from "./utils/history";

function App() {
  return (
    <Router history={history}>
      <div className="App">
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
      </div>
    </Router>
  );
}

export default App;
