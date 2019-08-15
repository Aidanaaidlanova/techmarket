import React, {Component} from "react";
import Product from "../Product";
import {ProductConsumer} from "../../context";
import styled from "styled-components";
import "../styles/bootstrap4/bootstrap.min.css";
import "../styles/shop_styles.css";
import "../styles/shop_responsive.css";
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

        <div className="container">
            <div className="row">
        {
          this.state.products && this.state.products.product &&  this.state.products.product.map((product)=> {
            return (
              <div class="product_item is_new" key={product.id} onClick ={() => {history.push({pathname:`/details/${product.id}/`,state: {proId: product.id}}); 
                                                                                                    history.go(`/details/${product.id}/`)}}>
              <div class="product_border"></div>
              <div class="product_image d-flex flex-column align-items-center justify-content-center">

              {product.photo.map((photo) =>{
                return(
                  <img src={photo.image} alt=""/>)})}
              </div>
              <div class="product_content">
              <div class="product_price">{product.wholesale_price} сом</div>
              <div class="product_name"><div><a href="#" tabindex="0">{product.name}</a></div></div>
              </div>
             
              <div>
                          <button class="button"><a href="">Добавить в корзину</a></button>
                        </div>
              </div>
              



              )}



            )


        }

        </div>
        </div>
      


        <Footer/>
        </React.Fragment>
        </body>
        )}

    }


    const ProductWrapper = styled.div`
    .card {
      border-color: transparent;
      transition: all 1s linear;
    }
    .card-footer {
      background: transparent;
      border-top: transparent;
      transition: all 1s linear;
    }
    &:hover {
      .card {
        border: 0.04rem solid rgba(0, 0, 0, 0.2);
        box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
      }
      .card-footer {
        background: rgba(247, 247, 247);
      }
    }
    .img-container {
      position: relative;
      overflow: hidden;
    }
    .card-img-top {
      transition: all 1s linear;
    }
    .img-container:hover .card-img-top {
      transform: scale(1.2);
    }
    .cart-btn {
      position: absolute;
      bottom: 0;
      right: 0;
      padding: 0.2rem 0.4rem;
      background: var(--lightBlue);
      border: none;
      color: var(--mainWhite);
      font-size: 1.4rem;
      border-radius: 0.5rem 0 0 0;
      transform: translate(100%, 100%);
      transition: all 1s ease-in-out;
    }
    .img-container:hover .cart-btn {
      transform: translate(0, 0);
    }
    .cart-btn:hover {
      color: var(--mainBlue);
      cursor: pointer;
    }
    `;