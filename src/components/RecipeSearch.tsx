import { styled } from "../stitches.config";

const StyledInput = styled("input", {
  width: "100%",
  boxSizing: "border-box",
  marginBottom: "$2",
  padding: "$3 $4",
  border: "none",
  borderRadius: "$1",
  fontSize: "$3",
  color: "$background",
  backgroundColor: "$text",
  "&:focus": {
    outline: "2px solid $primary",
  },
});

export function RecipeSearch({
  handleChange,
}: {
  handleChange: (value: string) => void;
}) {
  return (
    <StyledInput
      placeholder="Recipe name..."
      onChange={(e) => handleChange(e.target.value)}
    />
  );
}
