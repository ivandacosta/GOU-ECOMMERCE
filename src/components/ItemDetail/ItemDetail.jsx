import React from "react";

//style
import "./ItemDetail.css";
//components
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {
  function onAdd({ counter }) {
    alert(`Agregaste ${counter}`);
  }

  return (
    <div className="Item">
      <img src={product.images} alt="product" />

      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <h3>${product.price}</h3>
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;
