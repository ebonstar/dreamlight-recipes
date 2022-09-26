import { Fish, IngredientData } from "./ingredients";

export const FISH_DATA: Record<Fish, IngredientData> = {
  Anglerfish: { location: ["Forgotten Lands"], energy: 2000, sellPrice: 1500 },
  Bass: {
    location: [
      "Peaceful Meadow",
      "Forest of Valor",
      "Sunlit Plateau",
      "Frosted Heights",
      "Forgotten Lands",
    ],
    energy: 150,
    sellPrice: 25,
  },
  Bream: { location: ["Peaceful Meadow"], energy: 1300, sellPrice: 600 },
  Carp: {
    location: ["Forest of Valor", "Sunlit Plateau"],
    energy: 800,
    sellPrice: 400,
  },
  Catfish: { location: ["Peaceful Meadow"], energy: 1200, sellPrice: 550 },
  Cod: {
    location: ["Dazzle Beach", "Forgotten Lands", "Glade of Trust"],
    energy: 150,
    sellPrice: 35,
  },
  Fugu: { location: ["Dazzle Beach"], energy: 1700, sellPrice: 900 },
  Herring: {
    location: ["Dazzle Beach", "Glade of Trust"],
    energy: 250,
    sellPrice: 65,
  },
  Kingfish: { location: ["Dazzle Beach"], energy: 800, sellPrice: 450 },
  Lancetfish: { location: ["Forgotten Lands"], energy: 1300, sellPrice: 650 },
  Perch: {
    location: ["Forest of Valor", "Sunlit Plateau"],
    energy: 400,
    sellPrice: 80,
  },
  Pike: { location: ["Forest of Valor"], energy: 1500, sellPrice: 800 },
  "Rainbow Trout": {
    location: ["Peaceful Meadow", "Forest of Valor"],
    energy: 300,
    sellPrice: 50,
  },
  Salmon: {
    location: ["Frosted Heights", "Sunlit Plateau"],
    energy: 500,
    sellPrice: 150,
  },
  Sole: { location: ["Forgotten Lands"], energy: 500, sellPrice: 200 },
  Swordfish: { location: ["Dazzle Beach"], energy: 1500, sellPrice: 700 },
  Tilapia: {
    location: ["Sunlit Plateau", "Frosted Heights"],
    energy: 1150,
    sellPrice: 600,
  },
  Tuna: {
    location: ["Forgotten Lands", "Glade of Trust"],
    energy: 350,
    sellPrice: 95,
  },
  Walleye: { location: ["Sunlit Plateau"], energy: 1700, sellPrice: 1100 },
  "White Sturgeon": {
    location: ["Frosted Heights"],
    energy: 1800,
    sellPrice: 1200,
  },
};
