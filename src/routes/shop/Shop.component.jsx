import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import CategoriesPreview from "../categories-preview/categories.component";
import Category from "../category/category.component";
import { setCategories } from "../../store/category/category.action";

import { getCollectionandDocuments } from "../../utils/firebase/Firebase.utils";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategories = async () => {
      const categoriesArray = await getCollectionandDocuments();
      dispatch(setCategories(categoriesArray));
    };
    getCategories();

    //eslint-disable-next-line
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
