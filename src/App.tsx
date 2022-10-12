import { Switch, Route } from "wouter";
import { Ratatouille } from "./components/Ratatouille";
import { RecipeBook } from "./components/RecipeBook";
import { globalStyles, styled } from "./stitches.config";

const Wrapper = styled("div", {
  margin: "0 auto",
  maxWidth: "800px",
});

function App() {
  globalStyles();

  return (
    <Wrapper>
      <Switch>
        <Route path="/ratatouille">
          <Ratatouille />
        </Route>
        <Route>
          <RecipeBook />
        </Route>
      </Switch>
    </Wrapper>
  );
}

export default App;
