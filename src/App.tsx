import { Box, Grommet, Heading } from "grommet";
import Recipes from "./components/Recipes";
import { theme } from "./theme";

function App() {
  return (
    <Grommet full theme={theme}>
      <Box align="center">
        <Box
          width={{ min: "large", max: "xxlarge" }}
          pad="small"
          background="medium"
        >
          <Box>
            <Heading alignSelf="center" level="1" size="small" color="white">
              Dreamlight Valley Recipe Book
            </Heading>
          </Box>
          <Recipes />
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
