import { VEGETABLES_DATA } from "./vegetables";
import { FRUIT_DATA } from "./fruit";
import { GRAINS_DATA } from "./grains";
import { DAIRY_OIL_DATA } from "./dairyoil";
import { FISH_DATA } from "./fish";
import { SEAFOOD_DATA } from "./seafood";
import { SPICES_HERBS_DATA } from "./spicesherbs";
import { SWEETS_DATA } from "./sweets";

export type { Ingredient, IngredientData } from "./ingredients";

export { ALL_INGREDIENTS } from "./ingredients";

export const ALL_INGREDIENT_DATA = {
  ...VEGETABLES_DATA,
  ...FRUIT_DATA,
  ...GRAINS_DATA,
  ...DAIRY_OIL_DATA,
  ...FISH_DATA,
  ...SEAFOOD_DATA,
  ...SPICES_HERBS_DATA,
  ...SWEETS_DATA,
};
