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
import "../styles/cart_styles.css";
import "../styles/bootstrap4/bootstrap.min.css";
import "../styles/cart_responsive.css";
export default class Store extends Component {
 constructor() {
    super();
    this.state = {
      choice: [],
      productKeys: [],
    };
 }

  getFromStorage() {
    const productKeys = JSON.parse(localStorage.getItem('productKeys'));
    const productArr = [];
    productKeys.map((item,idx) => {
      productArr.push(JSON.parse(localStorage.getItem(`productNumber${item}`)));
    })
    console.log("МАШ МаССИВ ЕБАТЬ", productArr);
    this.setState({
      choice: productArr,
      productKeys: productKeys
    })
  }

  componentDidMount(){
   this.getFromStorage();
  }

  RemovefromBasket(e) {
    const id = e.target.id;
    localStorage.removeItem(`productNumber${id}`);
    const arr = this.state.productKeys;
    arr.splice(arr.indexOf(id),1)
    const newArr = JSON.stringify(arr);
    localStorage.removeItem('productKeys');
    localStorage.setItem('productKeys',newArr);
    this.getFromStorage();
  }

  render() {
    return (
    <body>
          <Header/>
          <div class="cart_section">
          <div class="container">
            <div class="row">
              <div class="col-lg-10 offset-lg-1">
                <div class="cart_container">
                  <div class="cart_title">Корзина</div>
                  

      {
           this.state.choice && this.state.choice.map((product)=> {
            return (
        <div class="cart_items" key={product.id}>
              <ul class="cart_list">
                <li class="cart_item clearfix">
                  <div class="cart_item_image"><img src={product.photo[0] && product.photo[0].image }/></div>
                  <div class="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                    <div class="cart_item_name cart_info_col">
                      <div class="cart_item_text">{product.name}</div>
                    </div>
                    

                    <div class="cart_item_quantity cart_info_col">
                      
                      <div class = "cart_item_count">
            
              <div >
                <span
                  className="btn btn-black mx-1"
                 
                  
                >
                  -
                </span>
                <span className="btn btn-black mx-1">1</span>
                <span
                  className="btn btn-black mx-1"
                 
                
                >
                  +
                </span>
              </div>
            
        </div>
                    </div>
                    <div class="cart_item_price cart_info_col">
                    <div id={product.id} className=" cart_item_text trash" onClick={(e) => this.RemovefromBasket(e)}>
                              <i id={product.id} className="fas fa-trash"/>
                    </div>
                    </div>
                    <div class="cart_item_price cart_info_col">
                      <div class="cart_item_text">{product.wholesale_price} сом </div>
                    </div>
                    
                  </div>
                </li>
              </ul>
            </div>

              )}



            )


        }
            <div class="cart_buttons">
             <Link to="/" ><button type="button" class="button cart_button_clear">Назад</button></Link>
             <Link to="/order"> <button type="button" class="button cart_button_checkout">Оформить заказ</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 
        <Footer/>
    </body>
    );
  }
}
