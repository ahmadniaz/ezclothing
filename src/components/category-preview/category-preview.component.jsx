import { Link } from "react-router-dom";

import ProductCard from "../product-card/Product-Card.component";
import {
  CategoryPreviewContainer,
  CategoryPreviewTitle,
  CategoryPreviewDiv,
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
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
