import React, { useState } from "react";

const CartItem = () => {

  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(0);
  const [decrement, setDecrement] = useState(0);
  const [removeItem, setRemoveItem] = useState(false);

  return (
    <div className="row my-1 text-capitalize text-center">
    <div className="col-10 mx-auto col-lg-2">
      <img
        src={img}
        style={{ width: "5rem", heigth: "5rem" }}
        className="img-fluid"
        alt=""
      />
    </div>
    <div className="col-10 mx-auto col-lg-2 ">
      <span className="d-lg-none">product :</span> {title}
    </div>
    <div className="col-10 mx-auto col-lg-2 ">
      <strong>
        <span className="d-lg-none">price :</span> ${price}
      </strong>
    </div>
    <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 ">
      <div className="d-flex justify-content-center">
        <div>
          <span
            className="btn btn-black mx-1"
            onClick={() => {
              return decrement(id);
            }}
          >
            -
          </span>
          <span className="btn btn-black mx-1">{count}</span>
          <span
            className="btn btn-black mx-1"
            onClick={() => {
              return increment(id);
            }}
          >
            +
          </span>
        </div>
      </div>
    </div>
    <div className="col-10 mx-auto col-lg-2 ">
      <div className=" cart-icon" onClick={() => removeItem(id)}>
        <i className="fas fa-trash" />
      </div>
    </div>

    <div className="col-10 mx-auto col-lg-2 ">
      <strong>item total : ${total} </strong>
    </div>
  </div>
  );
};

export default CartItem;