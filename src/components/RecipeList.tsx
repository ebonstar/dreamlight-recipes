import { useEffect, useState } from "react";
import { get, set } from "idb-keyval";
import {
  ColumnDef,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useDebouncyFn } from "use-debouncy";
import { ALL_INGREDIENT_DATA, Ingredient } from "../data/ingredients";
import { GameLocation, GAME_LOCATIONS } from "../data/locations";
import { Recipe, RECIPES, RECIPE_STARS, RECIPE_TYPE } from "../data/recipes";
import { RecipeItem } from "./RecipeItem";
import { RecipeNameFilter } from "./RecipeNameFilter";
import { RecipeFilter } from "./RecipeFilter";

export type RecipeRow = Recipe & {
  known: boolean;
};

export const columns: ColumnDef<RecipeRow, any>[] = [
  { accessorKey: "name" },
  { accessorKey: "type" },
  { accessorKey: "stars", filterFn: "equals" },
  {
    accessorKey: "ingredients",
    filterFn: (row, _, missingIngredients) => {
      if (row.original.ingredients.some((i) => missingIngredients.includes(i)))
        return false;
      return true;
    },
  },
  { accessorKey: "known", filterFn: "equals" },
];

export function RecipeList({ locations }: { locations: GameLocation[] }) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [data, setData] = useState<RecipeRow[]>(
    RECIPES.map((recipe) => ({ ...recipe, known: false }))
  );
  const [known, setKnown] = useState<string[]>([]);

  // load known recipes list from db on start
  useEffect(() => {
    const loadKnownRecipes = async () => {
      const savedKnownRecipes: string[] | undefined = await get("knownRecipes");
      if (savedKnownRecipes && savedKnownRecipes.length)
        setKnown(savedKnownRecipes);
    };
    loadKnownRecipes();
  }, []);

  // update recipe data and save known recipe list with every known change
  useEffect(() => {
    setData(
      [...data].map((recipe) => ({
        ...recipe,
        known: known.includes(recipe.name),
      }))
    );

    const saveKnownList = async () => {
      set("knownRecipes", known);
    };
    saveKnownList();
  }, [known]);

  const toggleRecipeKnown = async (name: string) => {
    const newKnown = known.includes(name)
      ? known.filter((i) => i !== name)
      : [...known, name];

    setKnown(newKnown);
  };

  const handleFilterChange = <T,>(id: string, value: T | undefined) => {
    const otherFilters = columnFilters.filter((rule) => rule.id !== id);
    if (value) setColumnFilters([...otherFilters, { id, value }]);
    else setColumnFilters(otherFilters);
  };

  // update available recipes when selected locations change
  useEffect(() => {
    const missingIngredients: Ingredient[] = [];
    if (locations.length < GAME_LOCATIONS.length) {
      for (const [ingredient, data] of Object.entries(ALL_INGREDIENT_DATA)) {
        if (!data.location.some((location) => locations.includes(location)))
          missingIngredients.push(ingredient as Ingredient);
      }
    }
    handleFilterChange("ingredients", missingIngredients);
  }, [locations]);

  const handleNameFilter = useDebouncyFn((value) => {
    handleFilterChange("name", value);
  }, 400);

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
    <div>
      <RecipeNameFilter handleChange={handleNameFilter} />
      <RecipeFilter
        filterName="Recipe Type"
        filterValues={RECIPE_TYPE}
        onFilterChange={(value) => handleFilterChange("type", value)}
      />
      <RecipeFilter
        filterName="Recipe Stars"
        filterValues={RECIPE_STARS}
        onFilterChange={(value) => handleFilterChange("stars", value)}
      />
      {table.getRowModel().rows.map((row) => (
        <RecipeItem
          key={row.id}
          id={row.id}
          recipe={row.original}
          toggleKnown={toggleRecipeKnown}
        />
      ))}
    </div>
  );
}
