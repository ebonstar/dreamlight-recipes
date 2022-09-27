import { Box, Text } from "grommet";
import { RECIPES } from "../data/recipes";
import { SmallTag } from "./Tag";
import { Stars } from "./Stars";

function Recipes() {
  return (
    <Box>
      {RECIPES.map((recipe) => (
        <Box margin="xsmall" pad="xsmall" background="light" round="xsmall">
          <Box direction="row" gap="small">
            <Text weight="bold">{recipe.name}</Text>
            <SmallTag value={recipe.type} />
          </Box>
          <Stars number={recipe.stars} />
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
