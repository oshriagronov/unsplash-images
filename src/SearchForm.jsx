import { useAppContext } from "./context";
const SearchForm = () => {
  const { setSearchWord } = useAppContext();
  return (
    <div>
      <h1 className="title">Unsplash Images</h1>
      <form
        action=""
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
          const userInput = e.target.elements.search.value;
          if (!userInput) return;
          setSearchWord(userInput);
        }}
      >
        <input
          type="text"
          name="search"
          placeholder="Dog"
          className="form-input search-input"
        />
        <button className="btn">Search</button>
      </form>
    </div>
  );
};
export default SearchForm;
