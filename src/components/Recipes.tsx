import { Box, Button, Text } from "grommet";
import { RECIPES } from "../data/recipes";
import { SmallTag } from "./Tag";
import { Stars } from "./Stars";
import { ALL_INGREDIENT_DATA, Ingredient } from "../data/ingredients";
import { GameLocation, GAME_LOCATIONS } from "../data/locations";
import { useEffect, useState } from "react";

function Recipes() {
  const [locations, setLocations] = useState<GameLocation[]>([
    ...GAME_LOCATIONS,
  ]);
  const [missing, setMissing] = useState<Ingredient[]>([]);

  // update missing ingredients list when available locations change
  useEffect(() => {
    console.log("setting missing");
    if (locations.length === GAME_LOCATIONS.length) {
      setMissing([]);
      return;
    }
    const newMissing: Ingredient[] = [];
    for (const [ingredient, data] of Object.entries(ALL_INGREDIENT_DATA)) {
      if (!data.location.some((location) => locations.includes(location)))
        newMissing.push(ingredient as Ingredient);
    }
    setMissing(newMissing);
  }, [locations]);

  const toggleLocation = (location: GameLocation) => {
    const newLocations = locations.includes(location)
      ? locations.filter((l) => l !== location)
      : [...locations, location];

    console.log(newLocations);

    setLocations(newLocations);
  };

  return (
    <Box>
      <Box direction="row" wrap>
        {GAME_LOCATIONS.map((location) => (
          <Button
            label={location}
            onClick={() => toggleLocation(location)}
            size="small"
            primary={locations.includes(location)}
            margin={{ right: "xsmall" }}
          />
        ))}
      </Box>
      {RECIPES.map((recipe) => (
        <Box margin="xsmall" pad="xsmall" background="light" round="xsmall">
          <Box direction="row" gap="small">
            <Text weight="bold">{recipe.name}</Text>
            <SmallTag value={recipe.type} />
          </Box>
          <Stars number={recipe.stars} />
          <Box direction="row" margin={{ top: "xsmall" }}>
            {recipe.ingredients.map((ingredient) => (
              <Button
                label={ingredient}
                size="small"
                primary
                margin={{ right: "xsmall" }}
                disabled={missing.includes(ingredient)}
              />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default Recipes;
