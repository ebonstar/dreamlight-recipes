import * as DialogPrimitive from "@radix-ui/react-dialog";
import {
  ALL_INGREDIENT_DATA,
  AnyOfType,
  ANY_OF_TYPE,
  ANY_OF_TYPE_INGREDIENTS,
  Ingredient,
} from "../data/ingredients";
import { styled } from "../stitches.config";
import { Dialog } from "./Dialog";

const IngredientButton = styled("button", {
  width: "120px",
  height: "30px",
  margin: "$1",
  border: "none",
  borderRadius: "$2",
  color: "$text",
  backgroundColor: "$secondary",
  cursor: "pointer",
  "&:hover": {
    border: "2px solid $primary",
  },
});

function IngredientDetails({ ingredient }: { ingredient: Ingredient }) {
  const locations = ALL_INGREDIENT_DATA[ingredient as Ingredient].location;
  return (
    <div>
      {locations.length > 1 ? "Locations: " : "Location: "}
      {locations.join(", ")}
    </div>
  );
}

function TypeDetails({ ingredient }: { ingredient: AnyOfType }) {
  return <div>{ANY_OF_TYPE_INGREDIENTS[ingredient].join(", ")}</div>;
}

const getIngredientDetails = (ingredient: Ingredient | AnyOfType) => {
  // requires casting https://github.com/Microsoft/TypeScript/issues/26255
  const isAnyOfType = ANY_OF_TYPE.includes(ingredient as AnyOfType);

  return isAnyOfType ? (
    <TypeDetails ingredient={ingredient as AnyOfType} />
  ) : (
    <IngredientDetails ingredient={ingredient as Ingredient} />
  );
};

export function IngredientList({
  ingredients,
}: {
  ingredients: (Ingredient | AnyOfType)[];
}) {
  return (
    <div>
      {ingredients.map((ingredient, i) => (
        <Dialog
          key={i}
          trigger={<IngredientButton>{ingredient}</IngredientButton>}
        >
          <DialogPrimitive.Title>{ingredient}</DialogPrimitive.Title>
          <DialogPrimitive.Description>
            {getIngredientDetails(ingredient)}
          </DialogPrimitive.Description>
        </Dialog>
      ))}
    </div>
  );
}
