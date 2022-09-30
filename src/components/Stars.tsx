import { RecipeStars } from "../data/recipes";

export function Stars({ number }: { number: RecipeStars }) {
  return (
    <div>
      {"⭐".repeat(number)}
      <span style={{ opacity: "20%" }} aria-hidden>
        {"⭐".repeat(5 - number)}
      </span>
    </div>
  );
}
