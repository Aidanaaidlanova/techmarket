import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../plugins/fontawesome-free-5.0.1/css/fontawesome-all.css";
import "../styles/cart_styles.css";
import "../styles/bootstrap4/bootstrap.min.css";
import "../styles/cart_responsive.css";


export default class CartItem extends Component {
  render() {
    const { id, title, img, price, total, count } = this.props.item;
    const { increment, decrement, removeItem } = this.props.value;

    return (
     
            <div class="cart_items">
              <ul class="cart_list">
                <li class="cart_item clearfix">
                  <div class="cart_item_image"><img src={img} alt=""/></div>
                  <div class="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                    <div class="cart_item_name cart_info_col">
                      <div class="cart_item_title">Наименование</div>
                      <div class="cart_item_text">{title}</div>
                    </div>
                   
                    <div class="cart_item_quantity cart_info_col">
                      <div class="cart_item_title">Количество</div>
                      <div class = "cart_item_count">
            <div >
              <div >
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
                    </div>
                    <div class="cart_item_price cart_info_col">
                      <div class="cart_item_title">Цена</div>
                      <div class="cart_item_text">{total} сом</div>
                    </div>
                    <div class="cart_item_total cart_info_col">
                      <div class="cart_item_title">Удалить </div>
                      <div className=" cart_item_text" onClick={() => removeItem(id)}>
                              <i className="fas fa-trash" />
                    </div>
                    
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            
            

            
     
    );
  }
}
