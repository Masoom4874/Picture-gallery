import React, { useContext } from "react";
import { ImageContext } from "../App";
import Image from "./Image";
import Loading from "./Loading";

const Images = ({ children }) => {
  const { response, isLoading } = useContext(ImageContext);

  return (
    <>
      <div class="container">
        <h1 className="text-center mt-3">Images</h1>
        <div class="img-grid">
          {isLoading ? (
            <Loading item={10} />
          ) : (
            response.map((data, key) => <Image key={key} data={data} />)
          )}
        </div>
      </div>
    </>
  );
};

export default Images;
