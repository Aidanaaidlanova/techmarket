import React, {Component} from "react";
import Product from "../Product";
import bar from "../bar.js";
import Title from "../Title";
import {Link} from "react-router-dom";
import {ButtonContainer} from "./Button";
import {storeProducts} from "../../data";
import {ProductConsumer} from "../../context";
import Header from '../header.js';
import Footer from '../footer.js';
import styled from "styled-components";
import axios from 'axios';
import Zoom from 'react-img-zoom';
import { createBrowserHistory } from 'history';
import "../plugins/fontawesome-free-5.0.1/css/fontawesome-all.css";
import "../plugins/OwlCarousel2-2.2.1/owl.carousel.css";
import "../plugins/OwlCarousel2-2.2.1/owl.theme.default.css";
import "../plugins/OwlCarousel2-2.2.1/animate.css";
import "../plugins/slick-1.8.0/slick.css";
import "../styles/bootstrap4/bootstrap.min.css";
import "../styles/product_styles.css";
import "../styles/product_responsive.css";

const history = createBrowserHistory();
export default class Details extends Component {
   constructor(props) {
    super(props);
    this.state = {
        loading: false,
        selectImageNumber: 0,
        product: [{
          id: 1,
          name: "Xiaomi a2",
          subcategory: {
            name: "Xiaomi"
        },
        description: "very good phone",
        wholesale_price: "7000.00",
        last_price: "7000.00",
        photos_for_product: null,
        count: 7,
        discount: false,
        comments: [
        {
          name: "Anonymous author",
          comment: "Good",
          mark: 5
      }
      ],
      popular: null
  }
  ]
}
}
componentWillMount() {
  axios.get(`http://46.101.236.211:8666/product/${this.props.location.state.proId}/`)
  .then(response => {
    this.setState({product: response.data,loading: true});
    console.log("Детально",this.state.product);
})
  .catch(error => {
    console.log(error);
});

}

changeImage() {
  this.setState({
    loading: true
  })
}

selectImage(e) {
  this.setState({
    selectImageNumber: Number(e.target.alt),
    loading: false,
  })
  setTimeout(() => {
    this.changeImage();
  },100)
  console.log(this.state)
}

addInBasket() {
  if(localStorage.getItem("myChoice") === null) {
    const data = this.state.product;
    const arr = [];
    arr.push(data);
    const strarr = JSON.stringify(arr);
    localStorage.setItem("myChoice",strarr);
  }
  const data = localStorage.getItem("myChoice");
  localStorage.clear();
  const arrdata = JSON.parse(data);
  arrdata.push(this.state.product);
  const strarr = JSON.stringify(arrdata);
  localStorage.setItem("myChoice",strarr);
}

render() {
    let product = this.state.product;
    const { loading,selectImageNumber } = this.state;
    return (
      
        <div>
<Header/>
        <div class="single_product">
        <div class="container">
        <div class="row">

        <div class="col-lg-2 order-lg-1 order-2">
        <ul class="image_list">
          {product.photo && product.photo.map((photo,idx) =>{
            return(
            <li key={idx}> <img onClick={(e) => this.selectImage(e)} src={photo.image} alt={idx}/></li>
          )})}
        </ul>
        </div>


        <div class="col-lg-5 order-lg-2 order-1">
        <div class="image_selected">            
        {/* {product.photo && product.photo.map((photo) =>{
            return(
              <Zoom img={photo.image} zoomScale={2} width={400} height={400}/>)
              
              <img src={this.state.product.photo[selectImageNumber].image} />
        })} */}
        {loading ? <Zoom img={this.state.product.photo[selectImageNumber].image} zoomScale={2} width={400} height={400}/> : <p>Загрузка</p>}
        </div>
        </div>


        <div class="col-lg-5 order-3">
        <div class="product_description">
        <div class="product_name">{product.name}</div>
        <div class="product_text"><p>{product.description}</p></div>
        <div class="order_info d-flex flex-row">
        <form action="#">
        <div class="clearfix">
        <div class="product_price">{product.wholesale_price}сом</div>
        <div class="button_container">
        {/* () => {history.push({pathname:`/cart`,state: {proId: product.id}}); history.go(`/cart`)} */}
        <button type="button" class="cart_button" onClick={() => this.addInBasket()}>В корзину</button>
        <div class="product_fav"><i class="fas fa-heart"></i></div>
        </div>
        </div>
        </form>
        </div>
        </div>
        </div>

        </div>
        </div>
        </div>
<Footer/>
        </div>
        
        )
}
}

