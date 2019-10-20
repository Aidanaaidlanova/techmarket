import React, { Component } from "react";
import Title from "../Title";
import { Link, withRouter } from "react-router-dom";
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
import {forEach} from "react-bootstrap/utils/ElementChildren";
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();
class Store extends Component {
 constructor() {
    super();
    this.state = {
      choice: [],
      productKeys: [],
      countArray: [],
      count: []
    };
 }

  getFromStorage() {
    if(localStorage.getItem("productKeys") !== null) {
      const productKeys = JSON.parse(localStorage.getItem("productKeys"));
      const productChoice = JSON.parse(localStorage.getItem("productChoice"));
      console.log("KEYS",productKeys);
      console.log("CHOICE",productChoice);
      this.setState({
        productKeys: productKeys,
        choice: productChoice
      })
    }
  }

  componentDidMount(){
   this.getFromStorage();
   console.log(this.state.choice);
  }

  componentWillMount(){
    this.getFromStorage();
  }

  RemovefromBasket(e) {
    const id = Number(e.target.id);
    const local = JSON.parse(localStorage.getItem("productChoice"));
    localStorage.removeItem("productChoice");
    localStorage.removeItem("productKeys");
    console.log("Id". id);
    const productKeys = this.state.productKeys;
    const allProduct = this.state.choice;
    let newFilterArr =  [];
    let newLocal = [];
    let newProductKeys = [];
    newFilterArr = allProduct.filter(
    one => id != one.id);

    newProductKeys = productKeys.filter(item => {
      return id != item;
    });

    console.log("ITEM KEY",newProductKeys);
    console.log("iTEM", allProduct);
    localStorage.setItem("productChoice", JSON.stringify(newFilterArr));

    localStorage.setItem("productKeys", JSON.stringify(newProductKeys));
    this.getFromStorage();
  }

  isUnique(array, propertyName) {
   let result = array.filter((e, i) => array.findIndex(a => a[propertyName] === e[propertyName]) === i);
   this.setState({
     count: result,
   });
   localStorage.setItem("products", JSON.stringify(result));
    history.push('/order');
    history.go('/order');
  };

  inputChange(e) {
    const value = Number(e.target.value);
    const id = Number(e.target.id);
    const count = this.state.count;
    const product = this.state.choice;
    for(let i = 0; i < product.length; i++) {
      if(id === product[i].id) {
        count.push({
          product: product[i].presence[0].id,
          count: value
        })
      }
    }
    this.setState({
      count: count,
    })
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
                      this.state.choice && this.state.choice.length ? this.state.choice.map((product,idx)=> {

                          return (
                            <div class="cart_items" key={product.id}>
                              <ul class="cart_list">
                                <li class="cart_item clearfix">
                                  <div class="cart_item_image"><img src={product.photo[0] && product.photo[0].image }/></div>
                                  <div class="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                                    <div class="cart_item_name cart_info_col">
                                      <div class="cart_item_text cart_item_text_name">{product.name}</div>
                                    </div>


                                    <div class="cart_item_quantity cart_info_col">

                                      <div class = "cart_item_count">

                                        <div >
                                          <input
                                            className="btn btn-black mx-1 plus"
                                            onChange={e => this.inputChange(e)}
                                            id={product.id}
                                            type={"number"}
                                            name={product.name}
                                            id={product.id}/>
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



                      ) : <p className={"h2 text-center"}>Корзина пока пуста</p>


                    }
              <div class="cart_buttons">
               <Link to="/" ><button type="button" class="button cart_button_clear">Назад</button></Link>
                 <button type="button"
                         class="button cart_button_checkout"
                         onClick={() => this.isUnique(this.state.count.reverse(),'product')}>
                   Оформить заказ
                 </button>
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

export default Store;
