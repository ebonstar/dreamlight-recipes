import { useState } from "react";
import { globalStyles, styled } from "./stitches.config";
import { LocationList } from "./components/LocationList";
import { RecipeList } from "./components/RecipeList";
import { GameLocation, GAME_LOCATIONS } from "./data/locations";
import Header from "./components/Header";

const Wrapper = styled("div", {
  margin: "0 auto",
  maxWidth: "800px",
});

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
    <Wrapper>
      <Header>Dreamlight Valley Recipe Book</Header>
      <LocationList
        allLocations={GAME_LOCATIONS}
        availableLocations={locations}
        toggleLocation={toggleLocation}
      />
      <RecipeList locations={locations} />
    </Wrapper>
  );
}

export default App;
