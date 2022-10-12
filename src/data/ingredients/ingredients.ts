import { GameLocation } from "../locations";

export type Vegetable = typeof VEGETABLES[number];
export const VEGETABLES = [
  "Asparagus",
  "Bell Pepper",
  "Carrot",
  "Chili Pepper",
  "Corn",
  "Cucumber",
  "Eggplant",
  "Leek",
  "Lettuce",
  "Mushroom",
  "Okra",
  "Onion",
  "Potato",
  "Pumpkin",
  "Seaweed",
  "Spinach",
  "Tomato",
  "Zucchini",
] as const;

export type Fruit = typeof FRUIT[number];
export const FRUIT = [
  "Apple",
  "Banana",
  "Blueberry",
  "Cherry",
  "Coconut",
  "Gooseberry",
  "Lemon",
  "Raspberry",
] as const;

export type Grain = typeof GRAINS[number];
export const GRAINS = ["Rice", "Wheat"] as const;

export type DairyOil = typeof DAIRY_OIL[number];
export const DAIRY_OIL = [
  "Butter",
  "Canola",
  "Cheese",
  "Egg",
  "Milk",
  "Peanut",
  "Soya",
] as const;

export type Fish = typeof FISH[number];
export const FISH = [
  "Anglerfish",
  "Bass",
  "Bream",
  "Carp",
  "Catfish",
  "Cod",
  "Fugu",
  "Herring",
  "Kingfish",
  "Lancetfish",
  "Perch",
  "Pike",
  "Rainbow Trout",
  "Salmon",
  "Sole",
  "Swordfish",
  "Tilapia",
  "Tuna",
  "Walleye",
  "White Sturgeon",
] as const;

export type Seafood = typeof SEAFOOD[number];
export const SEAFOOD = [
  "Clam",
  "Crab",
  "Lobster",
  "Oyster",
  "Scallop",
  "Shrimp",
  "Squid",
] as const;

export type SpiceHerb = typeof SPICES_HERBS[number];
export const SPICES_HERBS = [
  "Basil",
  "Garlic",
  "Ginger",
  "Mint",
  "Oregano",
] as const;

export type Sweet = typeof SWEETS[number];
export const SWEETS = ["Cocoa Bean", "Sugarcane", "Vanilla"] as const;

export type Ice = typeof ICE[number];
export const ICE = ["Slush Ice"] as const;

export type AnyOfType = typeof ANY_OF_TYPE[number];
export const ANY_OF_TYPE = [
  "Any Vegetable",
  "Any Fruit",
  "Any Grain",
  "Any Dairy or Oil",
  "Any Fish",
  "Any Seafood",
  "Any Spice",
  "Any Sweet",
  "Any Ice",
] as const;

export type Ingredient = typeof ALL_INGREDIENTS[number];
export const ALL_INGREDIENTS = [
  ...VEGETABLES,
  ...FRUIT,
  ...GRAINS,
  ...DAIRY_OIL,
  ...FISH,
  ...SEAFOOD,
  ...SPICES_HERBS,
  ...SWEETS,
  ...ICE,
] as const;

export const RATATOUILLE_INGREDIENTS: (Ingredient | AnyOfType)[] = [
  "Bell Pepper",
  "Cheese",
  "Egg",
  "Milk",
  "Cucumber",
  "Apple",
  "Basil",
  "Corn",
  "Onion",
  "Wheat",
  "Butter",
  "Oregano",
  "Rainbow Trout",
  "Banana",
  "Eggplant",
  "Lettuce",
  "Tomato",
  "Zucchini",
  "Any Vegetable",
  "Any Fruit",
  "Any Grain",
  "Any Dairy or Oil",
  "Any Fish",
  "Any Spice",
];

export type IngredientData = {
  location: GameLocation[];
  energy?: number;
  sellPrice?: number;
};
