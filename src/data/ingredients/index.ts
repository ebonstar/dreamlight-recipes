import { VEGETABLES_DATA } from "./vegetables";
import { FRUIT_DATA } from "./fruit";
import { GRAINS_DATA } from "./grains";
import { DAIRY_OIL_DATA } from "./dairyoil";
import { FISH_DATA } from "./fish";
import { SEAFOOD_DATA } from "./seafood";
import { SPICES_HERBS_DATA } from "./spicesherbs";
import { SWEETS_DATA } from "./sweets";
import { Ingredient, IngredientData } from "./ingredients";
import { ICE_DATA } from "./ice";

export type { AnyOfType, Ingredient, IngredientData } from "./ingredients";

export { ALL_INGREDIENTS, ANY_OF_TYPE } from "./ingredients";
export { ANY_OF_TYPE_DATA, ANY_OF_TYPE_INGREDIENTS } from "./any";

export const ALL_INGREDIENT_DATA: Record<Ingredient, IngredientData> = {
  ...VEGETABLES_DATA,
  ...FRUIT_DATA,
  ...GRAINS_DATA,
  ...DAIRY_OIL_DATA,
  ...FISH_DATA,
  ...SEAFOOD_DATA,
  ...SPICES_HERBS_DATA,
  ...SWEETS_DATA,
  ...ICE_DATA,
};
