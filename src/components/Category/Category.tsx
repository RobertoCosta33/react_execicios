import { CategoryContainer } from "./Category.styled";
import { propsCategory } from "../../types";

export const Category:React.FC<propsCategory> = (props) => {
  return (
    <CategoryContainer>
      {props.desc}
    </CategoryContainer>
  );
};
