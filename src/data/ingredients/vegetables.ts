import { Vegetable, IngredientData } from "./ingredients";

export const VEGETABLES_DATA: Record<Vegetable, IngredientData> = {
  Asparagus: { location: ["Frosted Heights"] },
  "Bell Pepper": { location: ["Forest of Valor"] },
  Carrot: { location: ["Peaceful Meadow"] },
  "Chili Pepper": { location: ["Sunlit Plateau"] },
  Corn: { location: ["Dazzle Beach"] },
  Cucumber: { location: ["Frosted Heights"] },
  Eggplant: { location: ["Frosted Heights"] },
  Leek: { location: ["Forgotten Lands"] },
  Lettuce: { location: ["Peaceful Meadow"] },
  Mushroom: { location: ["Glade of Trust"] },
  Okra: { location: ["Glade of Trust"] },
  Onion: { location: ["Forest of Valor"] },
  Potato: { location: ["Forgotten Lands"] },
  Pumpkin: { location: ["Forgotten Lands"] },
  Seaweed: {
    location: [
      "Dazzle Beach",
      "Forgotten Lands",
      "Forest of Valor",
      "Peaceful Meadow",
      "Sunlit Plateau",
      "Frosted Heights",
      "Glade of Trust",
    ],
  },
  Spinach: { location: ["Glade of Trust"] },
  Tomato: { location: ["Dazzle Beach"] },
  Zucchini: { location: ["Sunlit Plateau"] },
};
