import React from "react";
import { useLoaderData } from "react-router-dom";
import ResultArray from "../components/ResultArray.jsx";
import Search from "../components/search.jsx";
import { searchRecipes } from "../utils/recipes.js";

export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  // const searchResult = await storeInLocalStorage(q);
  const searchResult = await searchRecipes({ "query": q }, 30);
  return searchResult || [];
}

const SearchPage = () => {
  const searchResult = useLoaderData();
  return (
    <div className="flex flex-col items-center justify-around mt-[6rem]">
      <Search className={"shadow-standard my-12"} />
      <div>
        <ResultArray
          data={searchResult}
          onError={(e) =>
            (e.target.src =
              "https://placehold.co/270x200/FCFCFC/BCBCBC/png?text=Image+Not+Found&font=poppins")
          }
        />
      </div>
    </div>
  );
};

export default SearchPage;
