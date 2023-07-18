import debounce from "lodash.debounce";
import { useCallback } from "react";

const DebounceReactInput = ({ userList, setUserList }) => {
  const changeHandler = (event) => {
    const searchCriteria = event.target.value.toLowerCase();
    if (searchCriteria !== "") {
      const searchResult = userList.filter((item) => {
        return (
          item.first.toLowerCase().search(searchCriteria) !== -1 ||
          item.last.toLowerCase().search(searchCriteria) !== -1
        );
      });
      setUserList(searchResult);
    } else {
      setUserList(userList);
    }
  };

  const debouncedChangeHandler = useCallback(debounce(changeHandler, 400), []);

  return (
    <div>
      <input
        className="searchBox"
        type="search"
        placeholder="Search"
        aria-label="Search"
        data-testid="debounceSearch"
        onChange={debouncedChangeHandler}
      />
    </div>
  );
};

export default DebounceReactInput;
