const apiKey = process.env.SPOONACULAR_API_KEY;

export default async function fetchRecipeById(recipeId) {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`
  );
  const data = await response.json();
  return data;
}

export async function fetchRandomRecipes(number) {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=${number}&apiKey=${apiKey}`
  );
  const data = await response.json();
  return data.recipes || data;
}

export async function searchRecipes(params, number) {
  const url = new URL("https://api.spoonacular.com/recipes/complexSearch");
  url.searchParams.append("apiKey", apiKey);
  url.searchParams.append("number", number);
  url.searchParams.append("addRecipeInformation", "true");
  for (const key in params) {
    url.searchParams.append(key, params[key]);
  }
  const response = await fetch(url);
  const data = await response.json();
  return data.results || data;
}

export async function searchPopularRecipes(number) {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?number=${number}&addRecipeInformation=true&sort=popularity&apiKey=${apiKey}`
  );
  const data = await response.json();
  return data.results || data;
}

// ...existing code...
