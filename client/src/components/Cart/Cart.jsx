import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/16024276/pexels-photo-16024276/free-photo-of-portrait-of-woman-with-purple-orchids-in-her-hair.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Long red dress",
      desc: "Very basic",
      isNew: true,
      oldPrice: 36,
      price: 24,
    },
  ];

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Card</span>
    </div>
  );
};

export default Cart;
