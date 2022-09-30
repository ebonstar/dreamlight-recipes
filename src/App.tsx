import { useState } from "react";
import { globalStyles } from "./stitches.config";
import { LocationList } from "./components/LocationList";
import { RecipeList } from "./components/RecipeList";
import { GameLocation, GAME_LOCATIONS } from "./data/locations";

function App() {
  globalStyles();

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
    <div>
      <h1>Dreamlight Valley Recipe Book</h1>

      <LocationList<GameLocation>
        allLocations={GAME_LOCATIONS}
        availableLocations={locations}
        toggleLocation={toggleLocation}
      />
      <RecipeList locations={locations} />
    </div>
  );
}

export default App;
