import Input from "../../Input/styled";
import { StyledSearch } from "./styled";
import searchQueryParamName from "./searchQueryParamName";
import { useQueryParameter, useReplaceQueryParameter } from "./queryParameters";

const Search = () => {
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
  };

  return (
    <StyledSearch>
      <Input
        placeholder="Filtruj zadania"
        value={query || ""}
        onChange={onInputChange}
      />
    </StyledSearch>
  );
};

export default Search;
