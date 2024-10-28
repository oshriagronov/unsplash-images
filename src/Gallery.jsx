import { isError, useQuery } from "@tanstack/react-query";
import { useAppContext } from "./context";
import customFetch from "./utils";

const Gallery = () => {
  const { searchWord } = useAppContext(); // get the searchWord from the global context
  const { data, isLoading, isError } = useQuery({
    queryKey: ["images", searchWord], // define the query key and search word as dependencies, so that the query will be re-run when either of them changes(when the user will search for a new image)
    queryFn: async () => {
      /*
       * fetch images from the API using customFetch function(defined in utils.ts file) with the searchWord as the query parameter and API key form .env
       */
      const { data } = await customFetch.get(
        `?client_id=${import.meta.env.VITE_API_KEY}&query=${searchWord}`
      );
      return data;
    },
  });
  if (isLoading)
    //check if the query is loading and display a loading animation
    return (
      <section style={{ marginTop: "3rem" }}>
        <div className="loading"></div>
      </section>
    );
  if (isError)
    // check if there was an error in fetching the data and display an error message
    return (
      <section style={{ textAlign: "center", marginTop: "3rem" }}>
        <h4>{isError}</h4>
      </section>
    );
  if (data?.results.length < 1)
    // check if there are no images found for the search word and display a message
    return (
      <section style={{ textAlign: "center", marginTop: "3rem" }}>
        <h4>No results found..</h4>
      </section>
    );
  else
    return (
      <section className="image-container">
        {data?.results?.map((image) => {
          const { id, urls, description } = image;
          return (
            <img
              key={id}
              src={urls?.regular}
              alt={description}
              className="img"
            />
          );
        })}
      </section>
    );
};
export default Gallery;
