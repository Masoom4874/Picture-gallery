import React from "react";

const Image = ({ data }) => {
  const handleButtonClick = () => {
    if (data.links.download) {
      window.open(data.links.download, "_blank");
    }
  };
  return (
    <div className="img-container rounded-4 shadow-lg shadow-red m-2">
      <img
        className="rounded-4 object-fit-cover text-center"
        width="100%"
        height="400"
        src={data.urls.small}
        alt={data.alt_description}
      />
      <div className="text-center mt-2">
        <h5>{data.user.name}</h5>
        <h6 className="text-secondary">{data.alt_description}</h6>

        <button
          className="p-1 rounded "
          type="button"
          onClick={handleButtonClick}
        >
          View
        </button>
      </div>
    </div>
  );
};

export default Image;
