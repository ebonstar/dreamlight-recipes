import { GameLocation } from "../locations";
import { DAIRY_OIL_DATA } from "./dairyoil";
import { FISH_DATA } from "./fish";
import { FRUIT_DATA } from "./fruit";
import { GRAINS_DATA } from "./grains";
import { ICE_DATA } from "./ice";
import { AnyOfType, ICE, Ingredient, IngredientData } from "./ingredients";
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

export const ANY_OF_TYPE_DATA: Record<AnyOfType, IngredientData> = {
  "Any Vegetable": {
    location: getLocationsFromData(VEGETABLES_DATA),
  },
  "Any Fruit": {
    location: getLocationsFromData(FRUIT_DATA),
  },
  "Any Grain": {
    location: getLocationsFromData(GRAINS_DATA),
  },
  "Any Dairy or Oil": {
    location: getLocationsFromData(DAIRY_OIL_DATA),
  },
  "Any Fish": {
    location: getLocationsFromData(FISH_DATA),
  },
  "Any Seafood": {
    location: getLocationsFromData(SEAFOOD_DATA),
  },
  "Any Spice": {
    location: getLocationsFromData(SPICES_HERBS_DATA),
  },
  "Any Sweet": {
    location: getLocationsFromData(SWEETS_DATA),
  },
  "Any Ice": {
    location: getLocationsFromData(ICE_DATA),
  },
};
