import RecipeCard from "./components/RecipeCard";
import { recipes } from "./data/recipes";

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <h1>
          Find your next <span className="hl">bite</span>.
        </h1>
        <p>
          {recipes.length} recipes to browse, search, and cook. Pick one and
          get the full method.
        </p>
      </section>
      <div className="grid">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </main>
  );
}
