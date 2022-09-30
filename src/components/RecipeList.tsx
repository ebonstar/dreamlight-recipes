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

export function RecipeList({ locations }: { locations: GameLocation[] }) {
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
    <div>
      {table.getRowModel().rows.map((row) => {
        const { original: recipe } = row;
        return (
          <div key={row.id}>
            <div>
              <span>{recipe.name}</span>
              <SmallTag>{recipe.type}</SmallTag>
            </div>
            <Stars number={recipe.stars} />
            <div>
              {recipe.ingredients.map((ingredient, i) => (
                <button key={i}>{ingredient}</button>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
