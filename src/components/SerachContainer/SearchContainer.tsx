import { SearchBar } from "./SearchContainer.styled";
import { InputSearch } from "../InputSearch";
import { CheckboxContainer } from "../CheckboxContainer";

export const SearchContainer: React.FC = () => {
  return (
    <SearchBar>
      <InputSearch />
      <CheckboxContainer />
    </SearchBar>
  );
};
