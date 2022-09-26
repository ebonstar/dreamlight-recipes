import { IngredientData, Seafood } from "./ingredients";

export const SEAFOOD_DATA: Record<Seafood, IngredientData> = {
  Clam: { location: ["Dazzle Beach"] },
  Crab: { location: ["Frosted Heights"], energy: 1200, sellPrice: 600 },
  Lobster: { location: ["Glade of Trust"], energy: 1600, sellPrice: 950 },
  Oyster: { location: ["Dazzle Beach"] },
  Scallop: { location: ["Dazzle Beach"] },
  Shrimp: { location: ["Dazzle Beach"], energy: 750, sellPrice: 300 },
  Squid: {
    location: ["Glade of Trust", "Forgotten Lands"],
    energy: 1000,
    sellPrice: 500,
  },
};
