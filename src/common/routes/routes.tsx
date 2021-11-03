import { StaticRouter as Router, Route, Switch } from "react-router-dom";
import Application from "../../pages";
import Bible from "../../pages/bible";
import LargerCatechism from "../../pages/westminster/larger-catechism";
import ShorterCatechism from "../../pages/westminster/shorter-catechism";
import ROUTES from "./routes.dto";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME} component={Application} />
        <Route path={ROUTES.BIBLE} component={Bible} />
        <Route
          path={ROUTES.WESTMINSTER_LARGER_CATECHISM}
          component={LargerCatechism}
        />
        <Route
          path={ROUTES.WESTMINSTER_SHORTER_CATECHISM}
          component={ShorterCatechism}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
