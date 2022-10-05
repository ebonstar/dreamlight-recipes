import * as Toggle from "@radix-ui/react-toggle";
import { GameLocation } from "../data/locations";
import { styled } from "../stitches.config";

const StyledToggle = styled(Toggle.Root, {
  all: "unset",
  width: "80px",
  cursor: "pointer",
  "& svg": {
    width: "80px",
    height: "80px",
    fill: "$faded",
  },
  "&[data-state=on]": {
    "& svg": { fill: "$primary" },
  },
  "&:hover svg": {
    fill: "$text",
  },
});

const StyledLocation = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "2fr 1fr",
  gridTemplateAreas: `
    "icon"
    "name"
  `,
  justifyItems: "center",
});

const GridArea = styled("div", {
  variants: {
    area: {
      icon: {
        gridArea: "icon",
      },
      name: {
        gridArea: "name",
        textAlign: "center",
        fontSize: "$2",
      },
    },
  },
});

export function LocationToggle({
  icon: Icon,
  location,
  pressed,
  toggleLocation,
}: {
  icon: React.FC;
  location: GameLocation;
  pressed: boolean;
  toggleLocation: () => void;
}) {
  return (
    <StyledToggle
      pressed={pressed}
      onPressedChange={() => toggleLocation()}
      asChild
    >
      <StyledLocation>
        <GridArea area="icon">
          <Icon />
        </GridArea>
        <GridArea area="name">{location}</GridArea>
      </StyledLocation>
    </StyledToggle>
  );
}
