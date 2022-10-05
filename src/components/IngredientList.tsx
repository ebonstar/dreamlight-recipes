import { Ingredient } from "../data/ingredients";
import { styled } from "../stitches.config";
import { Dialog } from "./Dialog";

const IngredientButton = styled("button", {
  width: "120px",
  height: "30px",
  margin: "4px",
  border: "none",
  borderRadius: "4px",
  color: "$slate12",
  backgroundColor: "$slate2",
  cursor: "pointer",
  "&:hover": {
    border: "2px solid $sky9",
  },
});

export function IngredientList({ ingredients }: { ingredients: Ingredient[] }) {
  return (
    <div>
      {ingredients.map((ingredient, i) => (
        <Dialog
          key={i}
          trigger={<IngredientButton>{ingredient}</IngredientButton>}
        >
          Dialog contents
        </Dialog>
      ))}
    </div>
  );
}
