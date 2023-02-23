import "./SearchBar.css";
const SearchBar = ({ color, setColor }) => {
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
        onChange={(e) => setColor(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
