import Layout from "./Layout/Layout";
import CocktailList from "./CocktailList/CocktailList";
import SingleCocktail from "./pages/singleCocktail/singleCocktail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutMe from "./pages/About/AboutMe";
import Error from "./pages/Error/Error";

const index = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <CocktailList />
          </Route>
          <Route path="/about">
            <AboutMe />
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
