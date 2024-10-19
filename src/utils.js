import axios from "axios";
// Create an Axios instance with custom configuration
const customFetch = axios.create({
  baseURL: "https://api.unsplash.com/search/photos",
});
export default customFetch;
