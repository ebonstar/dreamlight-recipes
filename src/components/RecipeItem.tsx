import { Recipe } from "../data/recipes";
import { styled } from "../stitches.config";
import IngredientList from "./IngredientList";
import { Stars } from "./Stars";

const RecipeGrid = styled("div", {
  display: "grid",
  gridTemplateColumns: "2fr 1fr 1fr",
  gridTemplateRows: "1fr 1fr",
  gridTemplateAreas: `
    "name stars type"
    "ingredients ingredients ingredients"
  `,
  gridGap: "8px",
  alignItems: "end",
  marginBottom: "8px",
  padding: "12px 24px",
  paddingTop: "0",
  background: "$slate3",
});

const GridArea = styled("div", {
  variants: {
    area: {
      name: { gridArea: "name" },
      stars: { gridArea: "stars" },
      type: {
        gridArea: "type",
        fontSize: "0.8em",
        textAlign: "right",
        fontWeight: "lighter",
      },
      ingredients: { gridArea: "ingredients" },
    },
  },
});

const RecipeName = styled("h3", {
  margin: "0",
  fontWeight: "lighter",
});

export function RecipeItem({ id, recipe }: { id: string; recipe: Recipe }) {
  return (
    <RecipeGrid key={id}>
      <GridArea area="name">
        <RecipeName>{recipe.name}</RecipeName>
      </GridArea>
      <GridArea area="stars">
        <Stars number={recipe.stars} />
      </GridArea>
      <GridArea area="type">{recipe.type}</GridArea>
      <GridArea area="ingredients">
        <IngredientList ingredients={recipe.ingredients} />
      </GridArea>
    </RecipeGrid>
  );
}
