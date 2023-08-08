import "./App.css";
import SearchBar from "./components/searchbar";
import Images from "./components/Images";
import useAxios from "./hooks/useAxios";
import { createContext } from "react";

export const ImageContext = createContext();

function App() {
  const { response, isLoading, error, fetchData } = useAxios(
    `search/photos?page=1&query=cars&client_id=${process.env.REACT_APP_ACCESS_KEY}`
  );
  console.log(response);
  // const getimage = () = {
  //   axios.get("");
  // }
  const value = {
    response,
    isLoading,
    error,
    fetchData,
  };

  return (
    <ImageContext.Provider value={value}>
      <SearchBar />
      <Images />
    </ImageContext.Provider>
  );
}

export default App;
