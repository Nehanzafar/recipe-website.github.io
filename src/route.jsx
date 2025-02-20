import { loader as homeLoader } from "./routes/Home";
import { loader as recipeLoader } from "./routes/RecipeCard";
import { loader as searchLoader } from "./routes/SearchPage";
import Root from "./routes/Root";
import ConstructionPage from "./routes/ConstructionPage";
import RecipeCard from "./routes/RecipeCard";
import SearchPage from "./routes/SearchPage";
import ErrorPage from "./errorElement";
import Home from "./routes/Home";

const routes = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "/meal-plans",
        element: <ConstructionPage url={"Meal plans"} />,
      },
      {
        path: "/explore",
        element: <ConstructionPage url={"Explore"} />,
      },
      {
        path: "/contact",
        element: <ConstructionPage url={"Contact"} />,
      },
      {
        path: "/about",
        element: <ConstructionPage url={"About"} />,
      },
      {
        path: "/search",
        element: <SearchPage />,
        loader: searchLoader,
      },
      {
        path: "/RecipeCard/:recipeId",
        element: <RecipeCard />,
        loader: recipeLoader,
      },
    ],
  },
  {
    path: "/signup",
    element: <ConstructionPage url="Signup" />,
  },
];

export default routes