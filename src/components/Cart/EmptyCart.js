import React from "react";
import './cart.css';
import { Link } from "react-router-dom";
import { ButtonContainer } from "../pages/Button";
export default function EmptyCart() {
  return (
    <div className="container mt-5">
      <div className="empty row">
        <div className="col-10 mx-auto text-center text-title">
          <h1 className='name'></h1>
          <h3 className='error'> Пока в вашей корзине ничего нет! </h3>
        </div>
      </div>
    </div>
  );
}
