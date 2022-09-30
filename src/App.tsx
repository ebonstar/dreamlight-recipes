import Recipes from "./components/Recipes";
import { globalStyles } from "./stitches.config";

function App() {
  globalStyles();

  return (
    <div>
      <h1>Dreamlight Valley Recipe Book</h1>
      <Recipes />
    </div>
  );
}

export default App;
