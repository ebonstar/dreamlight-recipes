import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { styled } from "../stitches.config";

const FilterRow = styled("div", {
  display: "flex",
  marginBottom: "$2",
  alignItems: "center",
});
const FilterName = styled("div", {
  width: "120px",
  fontWeight: "lighter",
});
const FilterToggle = styled(ToggleGroup.Item, {
  padding: "$1 $3",
  marginRight: "$2",
  border: "2px solid transparent",
  borderRadius: "$1",
  color: "$componentText",
  backgroundColor: "$componentBackground",
  fontSize: "$2",
  cursor: "pointer",
  "&[data-state=on]": {
    border: "2px solid $focus",
  },
  "&:hover": {
    border: "2px solid $focus",
  },
});

export function RecipeFilter<T extends number | string>({
  filterName,
  filterValues,
  onFilterChange,
}: {
  filterName: string;
  filterValues: readonly T[];
  onFilterChange: (filter: T | undefined) => void;
}) {
  return (
    <FilterRow>
      <FilterName>{filterName}</FilterName>
      <ToggleGroup.Root
        type="single"
        onValueChange={(value) =>
          onFilterChange(value ? ((parseInt(value) || value) as T) : undefined)
        }
      >
        {filterValues.map((option) => (
          <FilterToggle key={option} value={String(option)}>
            {option}
          </FilterToggle>
        ))}
      </ToggleGroup.Root>
    </FilterRow>
  );
}
