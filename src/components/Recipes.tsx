import { Box, Text } from "grommet";
import { RECIPES } from "../data/recipes";

function Recipes() {
  return (
    <Box>
      {RECIPES.map((recipe) => (
        <Box margin="xsmall" pad="xsmall" background="light" round="xsmall">
          <Text weight="bold">{recipe.name}</Text>
          <Box direction="row">
            {recipe.ingredients.map((ingredient) => (
              <Box margin={{ right: "xsmall" }}>{ingredient}</Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default Recipes;
