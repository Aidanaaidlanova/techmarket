import React, { Component } from "react";
import {Link} from "react-router-dom";
export default class CartColumns extends Component {
  render() {
    return (
      <div class="cart_section">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 offset-lg-1">
          <div class="cart_container">
            <div class="cart_title">Корзина</div>


            <div class="cart_buttons">
             <Link to="/" ><button type="button" class="button cart_button_clear">Назад</button></Link>
             <Link to="/order"> <button type="button" class="button cart_button_checkout">Оформить заказ</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
  }
}
