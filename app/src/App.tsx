import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { CreateEmployee, DetailEmployee, ListEmployee } from "./pages";

function App() {
  return (
    <Router>
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
