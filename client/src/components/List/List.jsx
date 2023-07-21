import React from "react";
import "./List.scss";
import Card from "../Card/Card";

const List = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/16024276/pexels-photo-16024276/free-photo-of-portrait-of-woman-with-purple-orchids-in-her-hair.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Long red dress",
      isNew: true,
      oldPrice: 36,
      price: 24,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1007018/pexels-photo-1007018.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Long red dress",
      isNew: true,
      oldPrice: 26,
      price: 13,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/16024276/pexels-photo-16024276/free-photo-of-portrait-of-woman-with-purple-orchids-in-her-hair.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Long red dress",
      isNew: true,
      oldPrice: 36,
      price: 24,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/1007018/pexels-photo-1007018.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Long red dress",
      isNew: true,
      oldPrice: 26,
      price: 13,
    },
  ];

  return (
    <div className="list">
      {data.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
