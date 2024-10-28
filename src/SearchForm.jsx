import { useAppContext } from "./context";
const SearchForm = () => {
  const { setSearchWord } = useAppContext(); // get the setSearchWord function from context
  return (
    <div>
      <h1 className="title">Unsplash Images</h1>
      <form
        action=""
        className="search-form"
        onSubmit={(e) => {
          /*
           * Prevent the default form submission behavior, This is necessary because we are handling the search logic ourselves.
           * If the user input is empty it will not submit the form(return noting).
           * else the user input is not empty, it will call the setSearchWord function with the input value and update the state with the hook from the global context.
           */
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
