import "./FeaturedProducts.scss";

import React from "react";
import Card from "../Card/Card";

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1435836/pexels-photo-1435836.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1441025/pexels-photo-1441025.jpeg?auto=compress&cs=tinysrgb&w=1600  ",
      title: "red teenage skirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 1,
      img: "https://images.pexels.com/photos/5034420/pexels-photo-5034420.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/5034410/pexels-photo-5034410.jpeg?auto=compress&cs=tinysrgb&w=1600 ",
      title: "black and white dress",
      isNew: true,
      oldPrice: 25,
      price: 19,
    },
  ];

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.{" "}
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
