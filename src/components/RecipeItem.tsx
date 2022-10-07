import * as Checkbox from "@radix-ui/react-checkbox";
import * as Label from "@radix-ui/react-label";
import { CheckIcon } from "@radix-ui/react-icons";
import { styled } from "../stitches.config";
import { IngredientList } from "./IngredientList";
import { RecipeRow } from "./RecipeList";
import { Stars } from "./Stars";

const RecipeGrid = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "auto auto auto",
  gridTemplateAreas: `
    "name name"
    "stars type"
    "ingredients ingredients"
  `,
  gridGap: "$2",
  alignItems: "end",
  marginBottom: "$2",
  padding: "$3 $4",
  borderRadius: "$1",
  color: "$componentText",
  background: "$componentBackground",
  "@bp1": {
    gridTemplateColumns: "2fr 1fr 1fr",
    gridTemplateRows: "auto auto",
    gridTemplateAreas: `
      "name stars type"
      "ingredients ingredients ingredients"
    `,
  },
});

const GridArea = styled("div", {
  variants: {
    area: {
      name: { gridArea: "name" },
      stars: { gridArea: "stars" },
      type: {
        gridArea: "type",
        fontSize: "$1",
        textAlign: "right",
        fontWeight: "lighter",
      },
      ingredients: { gridArea: "ingredients" },
    },
  },
});

const checkboxSize = {
  width: 20,
  height: 20,
};

const StyledCheckbox = styled(Checkbox.Root, {
  all: "unset",
  display: "flex",
  ...checkboxSize,
  marginRight: "$2",
  "&::before": {
    position: "absolute",
    ...checkboxSize,
    content: "",
    borderRadius: "$2",
    backgroundColor: "$componentText",
    opacity: 0.2,
  },
});

const StyledIndicator = styled(Checkbox.Indicator, {
  color: "$componentText",
  "& svg": {
    ...checkboxSize,
  },
});

const RecipeName = styled("h3", {
  display: "flex",
  alignItems: "center",
  margin: "0",
  fontWeight: "lighter",
  cursor: "pointer",
});

export function RecipeItem({
  id,
  recipe,
  toggleKnown,
}: {
  id: string;
  recipe: RecipeRow;
  toggleKnown: (name: string) => void;
}) {
  return (
    <RecipeGrid key={id}>
      <GridArea area="name">
        <RecipeName>
          <StyledCheckbox
            id={recipe.name}
            checked={recipe.known}
            onCheckedChange={() => toggleKnown(recipe.name)}
          >
            <StyledIndicator>
              <CheckIcon />
            </StyledIndicator>
          </StyledCheckbox>
          <Label.Root htmlFor={recipe.name}>{recipe.name}</Label.Root>
        </RecipeName>
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
