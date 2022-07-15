import { useNavigate } from "react-router-dom";

import {
  DirectoryItemContainer,
  DirectoryImageContainer,
  DirectoryItemBody,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      {/* <img/> */}
      <DirectoryImageContainer
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <DirectoryItemBody>
        <h2>{title}</h2>
        <span>Shop Now</span>
      </DirectoryItemBody>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
