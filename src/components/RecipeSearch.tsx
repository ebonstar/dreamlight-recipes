import { styled } from "../stitches.config";

const StyledInput = styled("input", {
  width: "100%",
  boxSizing: "border-box",
  marginBottom: "$2",
  padding: "$3 $4",
  border: "none",
  borderRadius: "$1",
  fontSize: "$3",
  fontWeight: "lighter",
  color: "black",
  backgroundColor: "white",
  "&:focus": {
    outline: "2px solid $focus",
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
