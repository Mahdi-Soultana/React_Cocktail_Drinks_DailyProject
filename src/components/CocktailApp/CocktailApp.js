import Layout from "./Layout/Layout.js";
import CocktailList from "./CocktailList/CocktailList";
import SingleCocktail from "./pages/singleCocktail/singleCocktail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/about/About.js";
import Error from "./pages/Error/Error.js";

const index = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <CocktailList />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/cocktail/:id">
            <SingleCocktail />
          </Route>
          <Route path="/*">
            <Error />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default index;
