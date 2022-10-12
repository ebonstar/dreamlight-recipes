import {
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Header } from "./Header";
import { columns, RecipeRow } from "./RecipeList";
import { RATATOUILLE_INGREDIENTS } from "../data/ingredients/ingredients";
import { RECIPES } from "../data/recipes";
import { RecipeItem } from "./RecipeItem";
import { useEffect, useState } from "react";
import { get, set } from "idb-keyval";

const ratatouilleRecipes = RECIPES.filter((recipe) =>
  recipe.ingredients.every((ingredient) =>
    RATATOUILLE_INGREDIENTS.includes(ingredient)
  )
);

export function Ratatouille() {
  const [data, setData] = useState<RecipeRow[]>(
    ratatouilleRecipes.map((recipe) => ({ ...recipe, known: false }))
  );
  const [known, setKnown] = useState<string[]>([]);

  const table = useReactTable<RecipeRow>({
    data,
    columns,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
  });

  useEffect(() => {
    const loadKnownRecipes = async () => {
      const savedKnownRecipes: string[] | undefined = await get("knownRecipes");
      if (savedKnownRecipes && savedKnownRecipes.length)
        setKnown(savedKnownRecipes);
    };
    loadKnownRecipes();
  }, []);

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

  return (
    <>
      <Header>Ratatouille Realm Recipes</Header>
      {table.getRowModel().rows.map((row) => (
        <RecipeItem
          key={row.id}
          id={row.id}
          recipe={row.original}
          toggleKnown={toggleRecipeKnown}
        />
      ))}
    </>
  );
}
