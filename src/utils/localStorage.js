import localforage from "localforage";
import { searchRecipes } from "../api/recipes.js";

export async function storeInLocalStorage(query) {

    const data = await localforage.getItem("searchResult");
  if (data) {
    console.log("data from local storage");
    return data;
  } else {
    try {
      const searchResult = await searchRecipes({ "query": query }, 30);
      const data = await localforage.setItem("searchResult", searchResult);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
}
