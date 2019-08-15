 import React, {Component} from "react";
 import {Link, withRouter} from "react-router-dom";
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

class Search extends Component {
  constructor() {
    super();

    this.state = {

      results:[],
      loading: true

      };

    this.search = this.search.bind(this);

    }

    search() {
      axios.get(`http://46.101.236.211:8666/product/?search=${this.props.location.state}`)
      .then(response => {
        this.setState({results: response.data, loading: false});
        console.log(this.state.results);
      })
      .catch(error => {
        console.log(error);
      }) 
    }

  componentDidMount(){  
      this.search();
      
  };

  componentDidUpdate(nextProps) {
    if(nextProps.location.state !== this.props.location.state)
    {
     this.search();
     console.log("Props", nextProps.location.state);
     console.log("StateProps", this.props.location.state);
    }
    
  }
      
    
    render() {
      console.log(this.props.location.state);
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
           this.state.results && this.state.results.map((product)=> {
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


export default withRouter(Search); 