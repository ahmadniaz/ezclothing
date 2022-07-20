import { Link } from "react-router-dom";

import ProductCard from "../product-card/product-card.component";
import {
  CategoryPreviewContainer,
  CategoryPreviewTitle,
  CategoryPreviewDiv,
  ViewAllSpan,
} from "./category-preview.styles";
const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Link to={`${title}`}>
          {" "}
          <CategoryPreviewTitle>{title.toUpperCase()}</CategoryPreviewTitle>
        </Link>
      </h2>
      <CategoryPreviewDiv>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={products} product={product} />
          ))}
      </CategoryPreviewDiv>
      <Link to={`${title}`}>
        <ViewAllSpan>VIEW ALL</ViewAllSpan>
      </Link>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
