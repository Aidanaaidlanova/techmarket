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

export default class Search extends Component {
  constructor() {
    super();

    this.state = {

      results:[]

      };

    }

     ccomponentWillMount() {
      axios.get(`http://46.101.236.211:8666/product/?search=redmi`)
      .then(response => {
        this.setState({results: response.data});
        console.log(this.state.results);
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
        
        </div>
        </div>

        <div className="container">
            <div className="row">
        {
          this.state.results.map((product)=> {
            return (
              <div class="product_item is_new" key={product.id} onClick ={() => {history.push({pathname:`/details/${product.id}/`,state: {proId: product.id}}); 
                                                                                                    history.go(`/details/${product.id}/`)}}>
              <div class="product_border"></div>
              <div class="product_image d-flex flex-column align-items-center justify-content-center">

              {product.photos_for_product.map((photo) =>{
                return(
                  <img src={photo.photo} alt=""/>)})}
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


    