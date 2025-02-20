import SearchBar from "../components/search";
import { HeroParagraph, mobileHeroParagraph } from "../constants";
import Button from "../components/Button";
import { searchPopularRecipes } from "../utils/recipes.js";
import { useLoaderData } from "react-router-dom";
import PropTypes from "prop-types";
import testData from "../constants/testData.json";
import ResultArray from "../components/ResultArray.jsx";

export async function loader() {
  const recipes = await searchPopularRecipes(15);

  return recipes || [];
}

// For later use
// e.target.src =
// "https://placehold.co/270x200/FCFCFC/BCBCBC/png?text=Image+Not+Found&font=poppins"

const Home = () => {
  const recipes = useLoaderData() || [];
  return (
    <>
      <div
        role="Hero section"
        className="hero-section bg-heroImg items-center justify-start"
        // style={{backgroundImage: `url(front-end\src\assets\imgs\Hero img.png)`}}
      >
        <div className="flex flex-col lg:items-start items-center justify-center lg:w-1/2 w-auto h-full lg:ml-16">
          <h1 className="font-dancingScript lg:text-mainHeading md:text-[6rem] text-[3rem] text-backgroundColors-1 my-1">
            Search Recipes
          </h1>
          <SearchBar className={"shadow-standard my-1"} />
          <p className="hidden md:block bg-backgroundColors-1/80 text-[16px] text-secondary-1 shadow-standard my-3 p-2 rounded-[20px]  text-wrap lg:w-[45vw] w-[80vw] lg:text-left text-center">
            {HeroParagraph}
          </p>
          <p className="md:hidden block bg-backgroundColors-1/80 text-[16px] text-secondary-1 shadow-standard my-3 p-2 rounded-[20px]  text-wrap lg:w-[45vw] w-[80vw] lg:text-left text-center">
            {mobileHeroParagraph}
          </p>
          <div className="lg:block flex justify-around lg:w-auto w-full lg:px-0 md:px-12 px-8">
            <Button
              onClick={() => alert("Under Devolpment")}
              color={
                "bg-secondary-1 text-backgroundColors-2 hover:bg-secondary-2 hover:text-textColors-1"
              }
              className={
                "text-backgroundColors-2 md:py-3 md:my-2 py-2 md:px-8 px-4 mx-4 md:text-button md:rounded-2xl text-[1rem] hover:shadow-xl animation-home-page"
              }
            >
              Explore
            </Button>
            <Button
              onClick={() => alert("Under Devolpment")}
              color={
                "bg-secondary-1 text-backgroundColors-2 hover:bg-secondary-2 lg:ml-6 hover:text-textColors-1"
              }
              className={
                "text-backgroundColors-2 md:py-3 md:my-2 py-2 md:px-8 px-4 mx-4 md:text-button md:rounded-2xl text-[1rem] hover:shadow-xl animation-home-page"
              }
            >
              Random
            </Button>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h1 className="font-dancingScript lg:text-mainHeading md:text-[6rem] text-[3rem] text-center mt-6 text-textColors-2">
            Popular Recipes
          </h1>
          {recipes.length ? (
            <ResultArray
              data={recipes}
              onError={(e) =>
                (e.target.parentElement.parentElement.style.display = "none")
              }
            />
          ) : (
            <ResultArray
              data={testData.results}
              onError={(e) =>
                (e.target.parentElement.parentElement.style.display = "none")
              }
            />
          )}
        </div>
      </div>
    </>
  );
};

ResultArray.propTypes = {
  data: PropTypes.array,
};

export default Home;
