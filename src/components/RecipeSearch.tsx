import { styled } from "../stitches.config";

const StyledInput = styled("input", {
  width: "100%",
  boxSizing: "border-box",
  marginBottom: "8px",
  padding: "12px 24px",
  border: "none",
  borderRadius: "2px",
  fontSize: "16px",
  color: "$slate3",
  backgroundColor: "$slate12",
  "&:focus": {
    outline: "2px solid $sky9",
  },
});

export function RecipeSearch({
  handleChange,
}: {
  handleChange: (value: string) => void;
}) {
  return (
    <StyledInput
      placeholder="Search Recipes"
      onChange={(e) => handleChange(e.target.value)}
    />
  );
}
