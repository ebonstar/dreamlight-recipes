import { Ingredient } from "../data/ingredients";
import { styled } from "../stitches.config";

const IngredientButton = styled("button", {
  width: "120px",
  height: "30px",
  marginRight: "4px",
  border: "none",
  borderRadius: "4px",
  color: "$slate12",
  backgroundColor: "$slate2",
});

export default function IngredientList({
  ingredients,
}: {
  ingredients: Ingredient[];
}) {
  return (
    <div>
      {ingredients.map((ingredient, i) => (
        <IngredientButton key={i}>{ingredient}</IngredientButton>
      ))}
    </div>
  );
}
