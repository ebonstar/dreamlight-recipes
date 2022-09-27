import { Box } from "grommet";
import { RecipeStars } from "../data/recipes";

export function Stars({ number }: { number: RecipeStars }) {
  return (
    <Box
      direction="row"
      style={{ filter: "brightness(0.4) hue-rotate(180deg)" }}
      a11yTitle={number + " star recipe"}
    >
      {"⭐".repeat(number)}
      <Box style={{ opacity: "20%" }} aria-hidden>
        {"⭐".repeat(5 - number)}
      </Box>
    </Box>
  );
}
