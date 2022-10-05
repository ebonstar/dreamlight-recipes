import { GameLocation } from "../locations";
import { DAIRY_OIL_DATA } from "./dairyoil";
import { FISH_DATA } from "./fish";
import { FRUIT_DATA } from "./fruit";
import { GRAINS_DATA } from "./grains";
import { ICE_DATA } from "./ice";
import {
  AnyOfType,
  ANY_OF_TYPE,
  Ingredient,
  IngredientData,
} from "./ingredients";
import { SEAFOOD_DATA } from "./seafood";
import { SPICES_HERBS_DATA } from "./spicesherbs";
import { SWEETS_DATA } from "./sweets";
import { VEGETABLES_DATA } from "./vegetables";

function getLocationsFromData(
  data: Partial<Record<Ingredient, IngredientData>>
): GameLocation[] {
  const allLocations = Object.values(data).flatMap((v) => v.location);

  return [...new Set(allLocations)];
}

const anyLookup: Record<
  AnyOfType,
  Partial<Record<Ingredient, IngredientData>>
> = {
  "Any Vegetable": VEGETABLES_DATA,
  "Any Fruit": FRUIT_DATA,
  "Any Grain": GRAINS_DATA,
  "Any Dairy or Oil": DAIRY_OIL_DATA,
  "Any Fish": FISH_DATA,
  "Any Seafood": SEAFOOD_DATA,
  "Any Spice": SPICES_HERBS_DATA,
  "Any Sweet": SWEETS_DATA,
  "Any Ice": ICE_DATA,
};

export const ANY_OF_TYPE_DATA = Object.fromEntries(
  ANY_OF_TYPE.map((type) => [
    type,
    { location: getLocationsFromData(anyLookup[type]) },
  ])
) as Record<AnyOfType, IngredientData>;

export const ANY_OF_TYPE_INGREDIENTS = Object.fromEntries(
  ANY_OF_TYPE.map((type) => [type, Object.keys([anyLookup[type]])])
) as Record<AnyOfType, Ingredient[]>;
