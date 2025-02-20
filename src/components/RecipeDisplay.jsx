import { useState } from "react";
import PropTypes from "prop-types";
import { FaHeart, FaSpoon } from "react-icons/fa6";
import {
  FaRegHeart,
  FaThumbsUp,
  FaRegThumbsUp,
  FaRegThumbsDown,
  FaThumbsDown,
} from "react-icons/fa";
import { IoIosLeaf } from "react-icons/io";
import { Link } from "react-router-dom";

// To display the favourite icon
const favourite = (isFavourite) => {
  return isFavourite ? (
    <FaHeart className="absolute top-3 right-3 text-highlight-1 text-center -m-[0.4px] text-[0.95rem] group-hover:text-[#F39C12] animation-home-page" />
  ) : (
    <FaRegHeart className="absolute top-3 right-3 text-highlight-1 text-center -m-[0.4px] text-[0.95rem] group-hover:text-[#F39C12] animation-home-page" />
  );
};

// To display the like and dislike button
const likeDislike = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  return (
    <div className="flex flex-row">
      <div
        className={`rounded-full p-2 bg-textColors-1 mx-3 mb-1 mt-2 shadow-standard hover:text-[#F39C12]`}
        onClick={() => {
          if (isLiked) {
            setIsLiked(false);
          } else {
            setIsLiked(true);
            setIsDisliked(false);
          }
        }}
      >
        {isLiked ? (
          <FaThumbsUp className="text-[0.9rem] text-highlight-1 hover:text-[#F39C12] animation-home-page" />
        ) : (
          <FaRegThumbsUp className="text-[0.9rem] text-highlight-1 hover:text-[#F39C12] animation-home-page" />
        )}
      </div>
      <div
        className={`rounded-full p-2 bg-textColors-1 mx-1 mb-1 mt-2 shadow-standard hover:text-[#F39C12]`}
        onClick={() => {
          if (isDisliked) {
            setIsDisliked(false);
          } else {
            setIsDisliked(true);
            setIsLiked(false);
          }
        }}
      >
        {isDisliked ? (
          <FaThumbsDown className="text-[0.9rem] text-highlight-1 hover:text-[#F39C12] animation-home-page" />
        ) : (
          <FaRegThumbsDown className="text-[0.9rem] text-highlight-1 hover:text-[#F39C12] animation-home-page" />
        )}
      </div>
    </div>
  );
};


// To check if the image is broken and apply the right styling
const RecipeImage = ({ url, title, onError,isVegan,isHealthy }) => {
  const [isFavourite, setIsFavourite] = useState(false);


  return (
    <div
      className="relative rounded-xl shadow-standard group-hover:shadow-none"
      onClick={() => setIsFavourite(!isFavourite)}
    >
      <img
        src={url}
        alt={title}
        width={"270px"}
        height={"163px"}
        className="rounded-xl"
        onError={onError}
      />
      {favourite(isFavourite)}
      {iconLoader(isVegan, <IoIosLeaf className="text-textColors-2 text-center -m-[0.4px] text-[0.95rem]"/>, "2")}
    </div>
  );
};

// To check and apply stylings on vegan and healthy recipes

const iconLoader = (isVegan, Icon) => {

  return (
    <div>
      {isVegan ? (
        <div className={`rounded-full bg-textColors-1 p-2 mx-1 mb-1 shadow-standard absolute top-2 left-2`}>
          {Icon}
        </div>
      ) : ( 
        <div></div>
      )}
    </div>
  );
};

// The component which is used in the search results and the home page
const RecipeDisplay = ({ recipe, onErrorImage }) => {

  const isVegan = recipe.vegan;
  const isHealthy = true;


  return (
    <div
      className="rounded-xl w-[270px] h-[318px] bg-backgroundColors-1/80 md:my-4 my-1 md:mx-2 mx-1 group group hover:shadow-lg flex flex-col justify-end animation-home-page"
    >
      <RecipeImage
        url={recipe.image}
        title={recipe.title}
        isVegan={isVegan}
        isHealthy={isHealthy}
        onError={onErrorImage}
      />
      <Link
        to={`/RecipeCard/${recipe.id}`}
        className="mx-1 mt-2 font-poppins text-textColors-1"
      >
        <h1 className="font-bold text-[20px] overflow-clip overflow-ellipsis whitespace-nowrap">
          {recipe?.title || "Recipe Title"}
        </h1>
        <p className="">
          <b>Cooking Time:</b> {"\t"}
          {recipe.readyInMinutes} mins
        </p>
        <p>
          <b>Score:</b> {"\t"}
          {Math.floor(recipe.spoonacularScore)}%
        </p>
      </Link>
      {likeDislike()}
    </div>
  );
};

RecipeDisplay.propTypes = {
  recipe: PropTypes.object.isRequired,
  onErrorImage: PropTypes.func.isRequired,
};

export default RecipeDisplay;
