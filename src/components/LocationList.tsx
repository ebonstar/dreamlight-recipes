import { LocationButton } from "./LocationButton";

export function LocationList<T extends string>({
  allLocations,
  availableLocations,
  toggleLocation,
}: {
  allLocations: readonly T[];
  availableLocations: T[];
  toggleLocation: (location: T) => void;
}) {
  return (
    <div>
      {allLocations.map((location) => (
        <LocationButton
          key={location}
          onClick={() => toggleLocation(location)}
          status={availableLocations.includes(location) ? "active" : undefined}
        >
          {location}
        </LocationButton>
      ))}
    </div>
  );
}
