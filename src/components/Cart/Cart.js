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
class Store extends Component {
 constructor() {
    super();
    this.state = {
      choice: [],
      productKeys: [],
    };
 }

  getFromStorage() {
    if(localStorage.getItem("productKeys") !== null) {
      const productKeys = JSON.parse(localStorage.getItem("productKeys"));
      const productChoice = JSON.parse(localStorage.getItem("productChoice"));
      console.log("KEYS",productKeys);
      console.log("CHOICE",productChoice);
      localStorage.removeItem("productKeys");
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
    console.log("Id". id);
    const productKeys = this.state.productKeys;
    const allProduct = this.state.choice;
    console.log("ID",id);
    console.log("FIRST",productKeys);
    console.log("SECOND",allProduct);
    console.log("Index", productKeys.indexOf(id, 0));
    console.log("local", local);
    productKeys.splice(productKeys.indexOf(id, 0),1);
    let newFilterArr =  [];
    let newLocal = [];
    newFilterArr = allProduct.filter(
    one => id != one.id);

    newLocal =  local.filter(
      one => {if (id != one.id) {return local.splice(productKeys.indexOf(id, 0),1)}});
    localStorage.setItem("productChoice", JSON.stringify(newLocal));
    console.log("DELETED ARR",productKeys);
    console.log("DELETED Prod",allProduct);

  this.setState({choice: newFilterArr});
   console.log("FILTER ARR",newFilterArr);
    console.log("NewLocla ARR",newFilterArr);
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
                      this.state.choice ? this.state.choice.map((product)=> {
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



                      ) : <p>fkkffk</p>


                    }
              <div class="cart_buttons">
               <Link to="/" ><button type="button" class="button cart_button_clear">Назад</button></Link>
               <Link to={{
                 pathname: '/order',
                 state: {
                   prodId: this.state.choice && this.state.choice.map(id=>id.subcategory.id)
                 }
               }}> <button type="button" class="button cart_button_checkout">Оформить заказ</button></Link>
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
