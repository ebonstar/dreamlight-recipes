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
import { RecipeItem } from "./RecipeItem";
import { useDebouncyFn } from "use-debouncy";
import { RecipeSearch } from "./RecipeSearch";

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
    const otherFilters = columnFilters.filter(
      (rule) => rule.id !== "ingredients"
    );
    setColumnFilters([
      ...otherFilters,
      { id: "ingredients", value: missingIngredients },
    ]);
  }, [locations]);

  const handleChange = useDebouncyFn((value) => {
    const otherFilters = columnFilters.filter((rule) => rule.id !== "name");
    setColumnFilters([...otherFilters, { id: "name", value }]);
  }, 400);

  const table = useReactTable<Recipe>({
    data: RECIPES,
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
      <RecipeSearch handleChange={handleChange} />
      {table.getRowModel().rows.map((row) => (
        <RecipeItem key={row.id} id={row.id} recipe={row.original} />
      ))}
    </div>
  );
}
