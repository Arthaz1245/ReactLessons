import "./SearchBar.css";
import colorNames from "colornames";
const SearchBar = ({
  color,
  setColor,
  setHexValue,
  isDarkText,
  setIsDarkText,
}) => {
  return (
    <form
      action=""
      onSubmit={(e) => e.preventDefault()}
      className="form-search"
    >
      <input
        id="typecolor"
        type="text"
        role="searchbox"
        placeholder="type color"
        value={color}
        className="Inputbar"
        onChange={(e) => {
          setColor(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      <button type="button" onClick={setIsDarkText(!isDarkText)}>
        toggle
      </button>
    </form>
  );
};

export default SearchBar;
