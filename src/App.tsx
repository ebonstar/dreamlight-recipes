import { useState } from "react";
import { Root as DialogRoot } from "@radix-ui/react-dialog";
import * as Dialog from "@radix-ui/react-dialog";
import { globalStyles, styled } from "./stitches.config";
import { LocationList } from "./components/LocationList";
import { RecipeList } from "./components/RecipeList";
import { GameLocation, GAME_LOCATIONS } from "./data/locations";

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
      <DialogRoot>
        <h1>Dreamlight Valley Recipe Book</h1>
        <LocationList
          allLocations={GAME_LOCATIONS}
          availableLocations={locations}
          toggleLocation={toggleLocation}
        />
        <RecipeList locations={locations} />

        <Dialog.Portal>
          <Dialog.Overlay />
          <Dialog.Content>
            <Dialog.Title>TITLE</Dialog.Title>
            <Dialog.Description>PIES</Dialog.Description>
            <Dialog.Close />
          </Dialog.Content>
        </Dialog.Portal>
      </DialogRoot>
    </Wrapper>
  );
}

export default App;
