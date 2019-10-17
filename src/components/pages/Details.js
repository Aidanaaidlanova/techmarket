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
import {Form, Button} from 'react-bootstrap';
import "../plugins/fontawesome-free-5.0.1/css/fontawesome-all.css";
import "../styles/bootstrap4/bootstrap.min.css";
import "../styles/product_styles.css";
import "../styles/product_responsive.css";

const history = createBrowserHistory();
export default class Details extends Component {
   constructor(props) {
    super(props);
    this.state = {
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
  ],
  feedback:" ",
  loading: false,
  selectImageNumber: 0,
  added: false,
}
}

getItem = () => {
   axios.get(`http://46.101.236.211:8666/product/${this.props.location.state.proId}/`)
  .then(response => {
    this.setState({product: response.data, loading: true});
    console.log(this.state.product);
})
  .catch(error => {
    console.log(error);
});
}

 componentWillMount() {
  this.getItem();
}
 
  handleChange = event => {
    this.setState({ feedback: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const comment = {
      "product": this.state.product.id,
      "comment": this.state.feedback,
      "name": "Anonymous author",
      "mark": 5
     

    };
    console.log(comment);

      fetch(`http://46.101.236.211:8666/comment/`, {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(comment),
            })
      .then(res=>{console.log("OK"); this.getItem()})
      .catch(er=>{console.log("Not OK")});

    
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

//   if(localStorage.getItem("myChoice") === null) {
//   const data = this.state.product;
//   const arr = [];
//   arr.push(data);
//   const strarr = JSON.stringify(arr);
//   localStorage.setItem("myChoice",strarr);
// }
// else {const data = localStorage.getItem("myChoice");
//   localStorage.clear();
//   const arrdata = JSON.parse(data);
//   arrdata.push(this.state.product);
//   const strarr = JSON.stringify(arrdata);
//   localStorage.setItem("myChoice",strarr);}

  addLocalStorageId(id){
     if(localStorage.getItem("productKeys") === null) {
       const data = [id];
       localStorage.setItem("productKeys",JSON.stringify(data));
     }
     else {
       const data = JSON.parse(localStorage.getItem("productKeys"));
       localStorage.removeItem('productKeys');
       data.push(id);
       localStorage.setItem('productKeys',JSON.stringify(data));
     }
  }

  addLocalStorageProducts(item) {
     console.log(item);
     if(localStorage.getItem("productChoice") === null) {
       const data = [item];
       localStorage.setItem("productChoice",JSON.stringify(data));
     }else {
       const data = JSON.parse(localStorage.getItem("productChoice"));
       localStorage.removeItem("productChoice");
       data.push(item);
       localStorage.setItem("productChoice",JSON.stringify(data));
     }
  }

addInBasket(e) {
  this.addLocalStorageId(this.state.product.id);
  this.addLocalStorageProducts(this.state.product);
}

render() {
    let product = this.state.product;
    const { loading,selectImageNumber,added } = this.state;
    return (
      
        <div>
        <Header/>
        <div class="single_product">
        <div class="container">
        <div class="row">

 <div class="col-lg-2 order-lg-1 order-2">
        <ul class="image_list image_list__overflow">
          {product.photo && product.photo.map((photo,idx) =>{
            return(
            <li key={idx}> <img onClick={(e) => this.selectImage(e)} src={photo.image} alt={idx}/></li>
          )})}
        </ul>
        </div>


         <div class="col-lg-5 order-lg-2 order-1">
        <div class="image_selected">  
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
         <button type="button" class="cart_button" onClick={(e) => this.addInBasket(e)}>В корзину</button>
        <div class="product_fav"><i class="fas fa-heart"></i></div>
        </div>
        </div>
        </form>

        </div>
        </div>
        </div>

        

        </div>
        <div class="reviews">
    <div class="container">
      <div class="row">
        <div class="col">
          
          <div class="reviews_title_container">
            <h3 class="reviews_title">Отзывы</h3>
            <div class="reviews_all ml-auto"></div>
          </div>

          <div class="reviews_slider_container">
            
         {product.comments &&  product && product.comments.map((com) =>{
            return(
            <div class="owl-carousel owl-theme reviews_slider">
              <div class="owl-item">
                <div class="review d-flex flex-row align-items-start justify-content-start">
                  <div><div class="review_image"></div></div>
                  <div class="review_content">
                    <div class="review_name">{com.name}</div>
                    <div class="review_text"><p>{com.comment}</p></div>
                  </div>
                </div>
              </div>
            </div>
            )})}
            <div class="reviews_dots"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
        
<div class="contact_form">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 offset-lg-1">
          <div class="contact_form_container">
            <div class="contact_form_title">Оставьте отзыв об этом продукте.</div>

            <form action="#" id="contact_form" onSubmit={this.handleSubmit}>
              <div class="contact_form_inputs d-flex flex-md-row flex-column justify-content-between align-items-between">
              </div>
              <div class="contact_form_text">
                <textarea id="contact_form_message" 
                          class="text_field contact_form_message" 
                          name="feedback" 
                          rows="4" 
                          placeholder="Отзыв" 
                          required="required" 
                          data-error="Please, write us a message." 
                          onChange={this.handleChange}></textarea>
              </div>
              <div class="contact_form_button">
                <button type="submit" class="button contact_submit_button">Добавить</button>
              </div>
            </form>

          </div>
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
