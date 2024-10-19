import { useQuery } from "@tanstack/react-query";
import { useAppContext } from "./context";
import customFetch from "./utils";

const Gallery = () => {
  const { searchWord } = useAppContext();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["images", searchWord],
    queryFn: async () => {
      const { data } = await customFetch.get(
        `?client_id=${import.meta.env.VITE_API_KEY}&query=${searchWord}`
      );
      return data;
    },
  });
  if (isLoading)
    return (
      <section className="image-container">
        <h4>Loading...</h4>;
      </section>
    );
  if (isError)
    return (
      <section className="image-container">
        <h4>{isError}</h4>
      </section>
    );
  if (data?.results.length < 1)
    return (
      <section className="image-container">
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
