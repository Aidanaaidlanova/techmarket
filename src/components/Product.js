import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./styles/shop_styles.css";
import "./styles/shop_responsive.css";
import { ProductConsumer } from "../context";


export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div class="product">
        <div className="card">
          <ProductConsumer>
            {value => {
              return (
                
                <div
                  className="img-container p-5"
                  onClick={() => value.handleDetail(id)}
                >
                  <Link to="/details">
                    <div class="product_image d-flex flex-column align-items-center justify-content-center">
                    <img src={img} alt=""/>
                    </div>
                  </Link>
                  <button
                    className="cart-btn"
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                     
                    }}
                  >
                    {inCart ? (
                      <p className="text-capitalize mb-0" disabled>
                        В корзине
                      </p>
                    ) : (
                      <i className="fas fa-cart-plus" />
                    )}
                  </button>
                 
                </div>
              );
            }}
          </ProductConsumer>
          <div class="product-body">
          <div class="product_name"><a>{title}</a></div>
          <h4 class="product-price">{price}c</h4>
          </div>
        
        </div>
        </div>
      </ProductWrapper>
    );
  }
}

const ProductWrapper = styled.div`
  .card {
    position: relative;
    left: -10px;
    width: calc(100% + 20px);
    -webkit-transition: all 200ms ease;
    -moz-transition: all 200ms ease;
    -ms-transition: all 200ms ease;
    -o-transition: all 200ms ease;
    transition: all 200ms ease;
    background: #FFFFFF;
    cursor: pointer;
    padding-top: 40px;
    z-index: 0;
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
