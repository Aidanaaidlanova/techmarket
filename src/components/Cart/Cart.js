import React, { Component } from "react";
import Title from "../Title";
import { Link } from "react-router-dom";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import { ProductConsumer } from "../../context";
import EmptyCart from "./EmptyCart";
import { ButtonContainer } from "../pages/Button";
import Header from '../header.js'; 
import Footer from '../footer.js';
import "../styles/contact_responsive.css";
import "../styles/contact_styles.css";
import "../styles/blog_styles.css";
export default class Store extends Component {

  render() {
    return (
    <body>
          <Header/>
 
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                <div class="cart_section">
               <div class="container">
            <div class="row">
              <div class="col-lg-10 offset-lg-1">
                <div class="cart_container">
                  <div class="cart_title">Корзина</div>

            <div class="cart_items">
              
                           <CartList value={value}/>
                            </div>
                    <div class="cart_buttons">
                   <Link to="/" ><button type="button" class="button cart_button_clear">Назад</button></Link>
                   <Link to="/order"> <button type="button" class="button cart_button_checkout">Оформить заказ</button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
                  
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
        <Footer/>
    </body>
    );
  }
}
