import { useState } from "react";
import { Header } from "./Header";
import { LocationList } from "./LocationList";
import { RecipeList } from "./RecipeList";
import { GameLocation, GAME_LOCATIONS } from "../data/locations";

export function RecipeBook() {
  const [locations, setLocations] = useState<GameLocation[]>([
    ...GAME_LOCATIONS,
  ]);

  const toggleLocation = (location: GameLocation) => {
    const newLocations = locations.includes(location)
      ? locations.filter((l) => l !== location)
      : [...locations, location];
    setLocations(newLocations);
  };

  return (
    <>
      <Header>Dreamlight Valley Recipe Book</Header>
      <LocationList
        allLocations={GAME_LOCATIONS}
        availableLocations={locations}
        toggleLocation={toggleLocation}
      />
      <RecipeList locations={locations} />
    </>
  );
}
