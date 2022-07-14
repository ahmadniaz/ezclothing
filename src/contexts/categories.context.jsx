import { createContext, useState, useEffect } from "react";

import { getCollectionandDocuments } from "../utils/firebase/Firebase.utils.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  useEffect(() => {
    const getCategories = async () => {
      const categoryMap = await getCollectionandDocuments();
      setCategoriesMap(categoryMap);
      console.log(categoryMap);
    };
    getCategories();
  }, []);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
