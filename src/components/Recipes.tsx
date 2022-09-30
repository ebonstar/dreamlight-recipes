import { Box, Button, Text } from "grommet";
import { Recipe, RECIPES } from "../data/recipes";
import { ALL_INGREDIENT_DATA, Ingredient } from "../data/ingredients";
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

const columns: ColumnDef<Recipe, any>[] = [
  { accessorKey: "name" },
  { accessorKey: "type" },
  { accessorKey: "stars" },
  {
    accessorKey: "ingredients",
    filterFn: (row, _, missingIngredients) => {
      if (row.original.ingredients.some((i) => missingIngredients.includes(i)))
        return false;
      return true;
    },
  },
];

const data: Recipe[] = RECIPES;

function Recipes() {
  const [locations, setLocations] = useState<GameLocation[]>([
    ...GAME_LOCATIONS,
  ]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  // update available recipes when selected locations change
  useEffect(() => {
    const missingIngredients: Ingredient[] = [];
    if (locations.length < GAME_LOCATIONS.length) {
      for (const [ingredient, data] of Object.entries(ALL_INGREDIENT_DATA)) {
        if (!data.location.some((location) => locations.includes(location)))
          missingIngredients.push(ingredient as Ingredient);
      }
    }
    setColumnFilters([{ id: "ingredients", value: missingIngredients }]);
  }, [locations]);

  const toggleLocation = (location: GameLocation) => {
    const newLocations = locations.includes(location)
      ? locations.filter((l) => l !== location)
      : [...locations, location];
    setLocations(newLocations);
  };

  const table = useReactTable<Recipe>({
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
            key={location}
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
              {recipe.ingredients.map((ingredient, i) => (
                <Button
                  key={i}
                  label={ingredient}
                  size="small"
                  primary
                  margin={{ right: "xsmall" }}
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
