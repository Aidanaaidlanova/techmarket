import React, { Component } from "react";
import Product from "../Product";
import { storeProducts } from "../../data";
import styled from "styled-components";
import { ProductConsumer } from "../../context";
import "../styles/bootstrap4/bootstrap.min.css";
import "../styles/main_styles.css";
import "../styles/responsive.css";
import Header from '../header.js';
import Footer from '../footer.js';
import axios from 'axios';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();
export default class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentWillMount() {
    axios.get(`http://46.101.236.211:8666/product/`)
      .then(response => {
        this.setState({products: response.data});
        console.log(this.state.products);
      })
      .catch(error => {
        console.log(error);
      });

    let arr = this.state.products.product;
    console.log("a", arr);

  }

  startSort() {
    const arr = this.state.products.sort((a,b) => {
      return a.retail_price - b.retail_price;
    })
    this.setState({
      products: arr
    })
  }

  startSortDiscount() {
    const arr = this.state.products.map((item,idx) => {
      if(item.presence[0]) {
        return item;
      }
    })
    const arr2 = arr.filter(el => el);
    const arr3 = this.state.products.map((item,idx) => {
      if(!item.presence[0]) {
        return item
      }
    });
    const arr4 = arr3.filter(el => el);
    const sortedArr = arr2.sort((a,b) => {
      return a.presence[0].discount - a.presence[0].discount;
    });
    const finalArr = [].concat(sortedArr.reverse(),arr4);
    console.log(finalArr);
    this.setState({
      products: finalArr
    })
  }


  render() {



    return (
      <body>
      <React.Fragment>

        <Header/>

        <div class="banner">
          <div className="banner_background"></div>
          <div class="container fill_height">
            <div class="row fill_height">
              <div class="banner_product_image"></div>
              <div class="col-lg-5 offset-lg-4 fill_height">
                <div class="banner_content">
                  <h1 class="banner_text"></h1>
                  <div class="banner_price"><span></span></div>
                  <div class="banner_product_name"></div>
                  <div class="button banner_button"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12 p-0 m-2 d-flex justify-content-flex-start align-item-center ml-0 mr-0">
              <h3 className="m-0 mr-2">Сортировка</h3>
              <button className="btn btn-primary" onClick={() => this.startSort()}>По цене</button>
              <button className="btn btn-primary" onClick={() => this.startSortDiscount()}>По скидке</button>
            </div>
            {
              this.state.products[0] && this.state.products && this.state.products.map((product)=> {
                return (
                  <div class="product_item  discount" key={product.id} >
                    <div class="product_border"></div>
                    <div class="product_image d-flex flex-column align-items-center justify-content-center">

                      <img src={product.photo[0] && product.photo[0].image } alt="" onClick ={() => {history.push({pathname:`/details/${product.id}/`,state: {proId: product.id}});
                        history.go(`/details/${product.id}/`)}}/>
                    </div>
                    <div class="product_content">
                      <div class="product_price">{product.retail_price} сом </div>
                      <div class="product_name"><div><a href="#" tabindex="0">{product.name}</a></div></div>
                    </div>
                    <div class="product_fav"></div>
                    <ul class="product_marks">
                      {product.presence[0] ? <li className="product_mark product_discount">-{product.presence[0].discount}%</li> : ""}
                    </ul>

                    <div>
                      <button onClick={() => {
                        history.push({pathname: `/details/${product.id}/`, state: {proId: product.id}});
                        history.go(`/details/${product.id}/`)
                      }} className="button"><a href="">Подробнее</a></button>
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

    )
  }
}