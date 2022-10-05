import * as Collapsible from "@radix-ui/react-collapsible";
import { BeachIcon } from "../assets/BeachIcon";
import { ChezRemyIcon } from "../assets/ChezRemyIcon";
import { ForestIcon } from "../assets/ForestIcon";
import { ForgottenLandsIcon } from "../assets/ForgottenLandsIcon";
import { FrostedHeightsIcon } from "../assets/FrostedHeightsIcon";
import { GladeIcon } from "../assets/GladeIcon";
import { MeadowIcon } from "../assets/MeadowIcon";
import { PlazaIcon } from "../assets/PlazaIcon";
import { SunlightPlateauIcon } from "../assets/SunlitPlateauIcon";
import { GameLocation } from "../data/locations";
import { styled } from "../stitches.config";
import { LocationToggle } from "./LocationToggle";

const StyledCollapsible = styled(Collapsible.Root, {
  padding: "$2",
  marginBottom: "$3",
  backgroundColor: "$accent",
  color: "$accentText",
  borderRadius: "$2",
});

const StyledTrigger = styled("div", {
  fontWeight: "lighter",
  cursor: "pointer",
  "&::after": {
    content: "▼",
    marginLeft: "$2",
    fontSize: "$2",
  },
  "&[data-state=open]::after": {
    content: "▲",
  },
});

const StyledContent = styled(Collapsible.Content, {
  padding: "0",
  display: "flex",
  flexWrap: "wrap",
  "&[data-state=open]": {
    paddingBottom: "$1",
  },
});

const iconLookup: Record<GameLocation, React.FC> = {
  Plaza: PlazaIcon,
  "Peaceful Meadow": MeadowIcon,
  "Dazzle Beach": BeachIcon,
  "Forest of Valor": ForestIcon,
  "Glade of Trust": GladeIcon,
  "Sunlit Plateau": SunlightPlateauIcon,
  "Frosted Heights": FrostedHeightsIcon,
  "Forgotten Lands": ForgottenLandsIcon,
  "Chez Remy": ChezRemyIcon,
};

export function LocationList({
  allLocations,
  availableLocations,
  toggleLocation,
}: {
  allLocations: readonly GameLocation[];
  availableLocations: GameLocation[];
  toggleLocation: (location: GameLocation) => void;
}) {
  return (
    <StyledCollapsible>
      <Collapsible.Trigger asChild>
        <StyledTrigger>Toggle Available Locations</StyledTrigger>
      </Collapsible.Trigger>
      <StyledContent>
        {allLocations.map((location) => (
          <LocationToggle
            key={location}
            icon={iconLookup[location]}
            location={location}
            pressed={availableLocations.includes(location)}
            toggleLocation={() => toggleLocation(location)}
          />
        ))}
      </StyledContent>
    </StyledCollapsible>
  );
}
