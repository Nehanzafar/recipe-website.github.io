import { useState, useEffect } from "react";
import RecipeDisplay from "../components/RecipeDisplay";

const ResultArray = ({ data, onError }) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    setRecipes(data);
  }, [data]);

  return (
    <div className="flex flex-wrap md:flex-row flex-col md:justify-around items-center md:mx-3 mx-1 mb-3 mt-1">
      {recipes.map((v, index) => (
        <RecipeDisplay key={v?.id || index} recipe={v} onErrorImage={onError} />
      ))}
    </div>
  );
};

export default ResultArray;