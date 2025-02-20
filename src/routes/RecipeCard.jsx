import { useRef } from "react";
import fetchRecipeById from "../utils/recipes.js";
import { useLoaderData } from "react-router-dom";
import localforage from "localforage";
import ExpandableText from "../components/expandableTest.jsx";

export async function loader({ params }) {
  const fromLocalStorage = await localforage.getItem(`${params.recipeId}`);
  const keys = await localforage.keys();
  var recipe = {};
  if (fromLocalStorage) {
    recipe = fromLocalStorage;
  } else {
    recipe = await fetchRecipeById(params.recipeId);
    localforage.setItem(`${params.recipeId}`, recipe);
  }
  if (keys.length > 6) {
    localforage.removeItem(`${keys[0]}`);
  }
  return { recipe };
}

const RecipeCard = () => {
  const { recipe } = useLoaderData();

  if (recipe.status === "failure" || recipe.code === 402) {
    throw new Error("Failed to fetch data!");
  }

  const parser = new DOMParser();
  const HtmlDoc = parser.parseFromString(recipe.summary, "text/html").body;

  return (
    <div>
      <div
        className="hero-section flex lg:flex-row items-center lg:justify-start flex-col justify-center border border-1 border-gray  "
        style={{ backgroundImage: `url(${recipe.image})` }}
      >
        <div className="mx-16">
          <h1 className="font-roboto lg:text-[3rem] md:text-[2.5rem] text-[2rem] text-backgroundColors-1 backdrop-blur-lg rounded-xl p-4">
            {recipe.title}
          </h1>
          <ExpandableText id="summary" text={HtmlDoc.textContent} className='w-[60vw]'/>
        </div>
      </div>
      <div>
        <div className="flex flex-col md:items-start items-center mx-12 my-12">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-[1.75rem] inline-block font-roboto bg-secondary-1 text-textColors-1 rounded-2xl px-3 py-2 mt-5">
              Ingredients:
            </h1>
            <ul className="my-4 mx-5">
              {recipe.extendedIngredients &&
                recipe?.extendedIngredients.map((ingredient) => (
                  <li
                    key={ingredient.id}
                    className="list-disc list-inside font-roboto text-[0.95rem] my-2"
                  >
                    {" " +
                      ingredient.measures.us.amount +
                      " " +
                      ingredient.measures.us.unitShort +
                      " " +
                      ingredient.name}
                  </li>
                ))}
            </ul>
            {/* <div className="bg-secondary-1">
                <p>Nutritional Info (Per Serving)</p>
                {}

              </div> */}
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-[1.75rem] inline-block font-roboto bg-secondary-1 text-textColors-1 rounded-xl p-2 mt-5">
              Instructions
            </h1>

            <div className="my-4 mx-5 md:w-[70vw] w-[90vw]">
              {recipe.analyzedInstructions &&
                recipe?.analyzedInstructions[0]?.steps.map((step) => (
                  <div className="my-6 flex flex-row" key={step.number}>
                    <span>
                      <b>{step.number + ". "}</b>
                    </span>
                    <p className=" mx-5 font-roboto text-[0.95rem]">
                      {step.step}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
