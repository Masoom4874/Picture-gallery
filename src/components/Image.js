import React from "react";

const Image = ({ data }) => {
  return (
    <div>
      <img
        className="mx-5 my-5 px-2 py-2 object-fit-cover rounded-4 shadow-lg shadow-red"
        width="400"
        height="400"
        src={data.urls.small}
        alt={data.alt_description}
      />
      <div className="text-center ms-lg-5 ps-4">
        <h5>{data.user.name}</h5>
        <h6 className="">{data.alt_description}</h6>
        <a href={data.links.download} target="_blank" rel="noopener noreferrer">
          View
        </a>
      </div>
    </div>
  );
};

export default Image;
