import "./SearchBar.css";

function SearchBar(props) {
  const { search, onlyStocked, onSearch } = props;

  return (
    <div className="search-bar">
      <div>
        <input
          type="text"
          name="search"
          value={search}
          onChange={onSearch}
          placeholder="Search..."
        />
      </div>
      <div>
        <input
          type="checkbox"
          name="onlyStocked"
          checked={onlyStocked}
          onChange={onSearch}
        />
        <label>Only show products in stock</label>
      </div>
    </div>
  );
}

export default SearchBar;
