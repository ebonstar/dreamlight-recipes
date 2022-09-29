import { Box, Button, Text } from "grommet";
import { Recipe, RECIPES } from "../data/recipes";
import {
  ALL_INGREDIENTS,
  ALL_INGREDIENT_DATA,
  Ingredient,
} from "../data/ingredients";
import { GameLocation, GAME_LOCATIONS } from "../data/locations";
import { useEffect, useState } from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Stars } from "./Stars";
import { SmallTag } from "./Tag";

type RecipeRow = Omit<Recipe, "ingredients"> & {
  ingredient1: Ingredient;
  ingredient2?: Ingredient;
  ingredient3?: Ingredient;
  ingredient4?: Ingredient;
  ingredient5?: Ingredient;
};

const columnKeys = [
  "name",
  "type",
  "stars",
  "ingredient1",
  "ingredient2",
  "ingredient3",
  "ingredient4",
  "ingredient5",
] as const;

const columns: ColumnDef<RecipeRow, any>[] = columnKeys.map((key) => ({
  id: key,
  accessorKey: key,
  filterFn: "includesString",
}));

const data: RecipeRow[] = RECIPES.map((recipe) => {
  const { ingredients, ...rest } = recipe;

  const [ingredient1, ingredient2, ingredient3, ingredient4, ingredient5] =
    ingredients;

  return {
    ...rest,
    ingredient1,
    ingredient2,
    ingredient3,
    ingredient4,
    ingredient5,
  };
});

function Recipes() {
  const [locations, setLocations] = useState<GameLocation[]>([
    ...GAME_LOCATIONS,
  ]);
  const [available, setAvailable] = useState<Ingredient[]>([
    ...ALL_INGREDIENTS,
  ]);

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  // update available ingredients list when available locations change
  useEffect(() => {
    if (locations.length === GAME_LOCATIONS.length) {
      setAvailable([...ALL_INGREDIENTS]);
      return;
    }
    const newAvailable: Ingredient[] = [];
    for (const [ingredient, data] of Object.entries(ALL_INGREDIENT_DATA)) {
      if (data.location.some((location) => locations.includes(location)))
        newAvailable.push(ingredient as Ingredient);
    }
    setAvailable(newAvailable);
  }, [locations]);

  const toggleLocation = (location: GameLocation) => {
    const newLocations = locations.includes(location)
      ? locations.filter((l) => l !== location)
      : [...locations, location];

    console.log(newLocations);

    setLocations(newLocations);
  };

  const table = useReactTable<RecipeRow>({
    data,
    columns,
    state: {
      columnFilters,
    },
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
  });

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
      {table.getRowModel().rows.map((row) => {
        const { original: recipe } = row;
        const ingredients = [
          recipe.ingredient1,
          recipe.ingredient2,
          recipe.ingredient3,
          recipe.ingredient4,
          recipe.ingredient5,
        ].filter(Boolean) as Ingredient[];
        return (
          <Box
            key={row.id}
            margin="xsmall"
            pad="xsmall"
            background="light"
            round="xsmall"
          >
            <Box direction="row" gap="small">
              <Text weight="bold">{recipe.name}</Text>
              <SmallTag value={recipe.type} />
            </Box>
            <Stars number={recipe.stars} />
            <Box direction="row" margin={{ top: "xsmall" }}>
              {ingredients.map((ingredient, i) => (
                <Button
                  key={i}
                  label={ingredient}
                  size="small"
                  primary
                  margin={{ right: "xsmall" }}
                  disabled={!available.includes(ingredient)}
                />
              ))}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

export default Recipes;
