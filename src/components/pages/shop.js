import React, {Component} from "react";
import Product from "../Product";
import {ProductConsumer} from "../../context";
import styled from "styled-components";
import "../styles/bootstrap4/bootstrap.min.css";
import "../styles/shop_styles.css";
import "../styles/shop_responsive.css";
import "../styles/main_styles.css";
import Header from '../header.js';
import Footer from '../footer.js';
import axios from 'axios';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

export default class shop extends Component {
  constructor() {
    super();

    this.state = {

      products: [],

      results:[]

      };

    }

    componentWillMount() {
      axios.get(`http://46.101.236.211:8666/subcategory/${this.props.location.state.subId}`)
      .then(response => {
        this.setState({products: response.data});
        console.log(this.state.products);
      })
      .catch(error => {
        console.log(error);
      });
      
    }

    startSort() {
    console.log("click");
      if(this.state.products.product.length >= 1) {
        this.state.products.product = this.state.products.product.sort((a,b) => {
          return a.retail_price - b.retail_price;
        })
        this.setState({
          products: this.state.products
        })
      }
    console.log("STATE", this.state.products);
  }


startSortDiscount() {
    
        
    this.state.products.product = this.state.products.product.sort((a,b)=>b.presence.map(pre=>pre.discount)-a.presence.map(dis=>dis.discount));
    
    this.setState({
      products: this.state.products
    });
  }

    render() {
      return (
        <body>
        <React.Fragment>

        <Header/>
        <div class="home">
        <div class="home_background parallax-window" data-parallax="scroll"></div>
        <div class="home_overlay"></div>
        <div class="home_content d-flex flex-column align-items-center justify-content-center">
        <h2 class="home_title">{this.state.products.name}</h2>
        </div>
        </div>
         <div class="shop"> 
        <div className="container">
            <div className="row">
             
               <div class="shop_content">
            <div class="shop_bar clearfix">
            <div class="shop_sorting">
                <span>Сортировка:</span>
                <ul>
                  <li>
                    <span class="sorting_text">по ...</span><i class="fas fa-chevron-down"></i>
                    <ul>
                      <li class="shop_sorting_button" onClick={() => this.startSort()}>по цене</li>
                      <li class="shop_sorting_button" onClick={() => this.startSortDiscount()}>по скидке</li>
                    
                    </ul>
                  </li>
                </ul>
              </div>
              </div>
              </div>
           
        {
          this.state.products && this.state.products.product &&  this.state.products.product.map((product)=> {
            return (
              <div class="product_item is_new" key={product.id} >
              <div class="product_border"></div>
              <div class="product_image d-flex flex-column align-items-center justify-content-center">

               <img src={product.photo[0] && product.photo[0].image } />
              </div>
              <div class="product_content">{product.presence &&  product && product.presence.map((presence) =>{
            return(
              <div class="product_price">{presence.price} сом </div>
               )})}
              <div class="product_name"><div><a href="#" tabindex="0">{product.name}</a></div></div>
              </div>
              <div class="product_fv"></div>
              <ul class="product_marks">
                  {product.presence.map(a=>a.discount > 0 ? <li className="product_mark product_discount">-{product.presence[0].discount}%</li> : "")}
                 
                </ul>
             
              <div>
                          <button onClick ={() => {history.push({pathname:`/details/${product.id}/`,state: {proId: product.id}}); 
                                                                                                    history.go(`/details/${product.id}/`)}} class="button"><a href="">Подробнее</a></button>
                        </div>
              </div>
              



              )}



            )


        }

        </div>
        </div>
      </div>

        <Footer/>
        </React.Fragment>
        </body>
        )}

    }


  