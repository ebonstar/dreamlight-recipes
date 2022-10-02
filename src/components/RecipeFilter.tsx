import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { styled } from "../stitches.config";

const FilterRow = styled("div", {
  display: "flex",
  marginBottom: "8px",
  alignItems: "center",
});
const FilterName = styled("div", {
  width: "120px",
  fontWeight: "lighter",
});
const FilterToggle = styled(ToggleGroup.Item, {
  padding: "4px 12px",
  marginRight: "8px",
  border: "none",
  borderRadius: "2px",
  color: "$slate12",
  backgroundColor: "$slate3",
  fontSize: "14px",
  cursor: "pointer",
  "&[data-state=on]": {
    color: "$slate3",
    backgroundColor: "$slate12",
  },
  "&:hover": {
    outline: "2px solid $sky9",
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
