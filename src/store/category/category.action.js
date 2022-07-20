import { SET_CATEGORIES } from "../types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCategories = (categoriesArray) =>
  createAction(SET_CATEGORIES, categoriesArray);
