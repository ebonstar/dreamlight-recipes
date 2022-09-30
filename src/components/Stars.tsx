import { RecipeStars } from "../data/recipes";

export function Stars({ number }: { number: RecipeStars }) {
  return (
    <div style={{ filter: "brightness(0.4) hue-rotate(180deg)" }}>
      {"⭐".repeat(number)}
      <span style={{ opacity: "20%" }} aria-hidden>
        {"⭐".repeat(5 - number)}
      </span>
    </div>
  );
}
