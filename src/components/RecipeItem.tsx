import { Recipe } from "../data/recipes";
import { Stars } from "./Stars";
import { SmallTag } from "./Tag";

export function RecipeItem({ id, recipe }: { id: string; recipe: Recipe }) {
  return (
    <div key={id}>
      <div>
        <span>{recipe.name}</span>
        <SmallTag>{recipe.type}</SmallTag>
      </div>
      <Stars number={recipe.stars} />
      <div>
        {recipe.ingredients.map((ingredient, i) => (
          <button key={i}>{ingredient}</button>
        ))}
      </div>
    </div>
  );
}
