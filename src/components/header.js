import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./plugins/fontawesome-free-5.0.1/css/fontawesome-all.css";
import "./styles/bootstrap4/bootstrap.min.css";
import "./styles/contact_responsive.css";
import logo from './img/logo.png';
import search from './images/search.png';
import cart from './images/cart.png';
import axios from 'axios';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [{
                name: "Смартфоrн",
                subcategories:
                    [
                        {
                            id: "",
                            name: "Meizu"
                        }],
            }],
            query:" redmi"


        }

    }

    componentDidMount() {
        axios.get('http://46.101.236.211:8666/category/')
            .then(response => {
                this.setState({categories: response.data});
                console.log(this.state.categories);
            })
            .catch(error => {
                console.log(error);
            });
    }

        handleInputChange = () => {
            this.setState({
              query: this.search.value
            })
          }

    render() {
        console.log(this.state.categories);
        return (
            <header className="header">
                <div className="header_main">
                    <div className="container">
                        <div className="row">


                            <div className="col-lg-2 col-sm-3 col-3 order-1">
                                <div className="logo_container">
                                    <div className="logo"><Link to="/"><img src={logo}/></Link></div>
                                </div>
                            </div>


                            <div className="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
                                <div className="header_search">
                                    <div className="header_search_content">
                                        <div className="header_search_form_container">
                                            <form action="#" className="header_search_form clearfix">
                                                <input type="search" required="required"
                                                       className="header_search_input"  ref={input => this.search = input}
          onChange={this.handleInputChange}/>

                                                <button type="submit" className="header_search_button trans_300"
                                                        value="Submit"><img src={search} onClick ={() => {history.push({pathname:`/search`,state: {search: this.state.query}}); 
                                                                                                    history.go(`/search`)}}/></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-9 order-lg-3 order-2 text-lg-left text-right">
                                <div className="wishlist_cart d-flex flex-row align-items-center justify-content-end">
                                    <div className="wishlist d-flex flex-row align-items-center justify-content-end">
                                        <div className="wishlist_icon"></div>
                                        <div className="wishlist_content">
                                            <div className="wishlist_text"><a href="#"></a></div>
                                            <div className="wishlist_count"></div>
                                        </div>
                                    </div>

                                    <Link to="/cart">
                                        <div className="cart">
                                            <div
                                                className="cart_container d-flex flex-row align-items-center justify-content-end">
                                                <div className="cart_icon">
                                                    <img src={cart}/>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <nav className="main_nav">
                    <div className="container">
                        <div className="row">
                            <div className="col">

                                <div className="main_nav_content d-flex flex-row">
                                    <div className="cat_menu_container">
                                        <div
                                            className="cat_menu_title d-flex flex-row align-items-center
                                            justify-content-start">
                                            <div className="cat_burger"><span></span><span></span><span></span></div>
                                            <div className="cat_menu_text">Категории</div>
                                        </div>
                                        <ul className="cat_menu">
                                            {this.state.categories.map((category) => {

                                                return (

                                                    <li class="hassubs"><a>{category.name}<i class="fas fa-chevron-right ml-auto"></i></a>


                                                        <ul>
                                                            {category.subcategories.map(cat => (

                                                                <li key = {cat.id} onClick ={() => {history.push({pathname:`/shop/subcategory/${cat.id}`,state: {subId: cat.id}}); 
                                                                                                    history.go(`/shop/subcategory/${cat.id}`)}}>
                                                                            <a>{cat.name}</a></li>

                                                            ))}
                                                        </ul>
                                                    </li>

                                                )
                                            })}
                                        </ul>
                                            </div>

                                        <div className="main_nav_menu ml-auto">
                                            <ul className="standard_dropdown main_nav_dropdown">
                                                <li><Link to='/tracking'><a href="#">Отслеживание товара<i
                                                    className="fas fa-chevron-down"></i></a></Link></li>
                                                <li><Link to='/aboutus'><a href="#">О нас <i
                                                    className="fas fa-chevron-down"></i></a></Link></li>
                                                <li><Link to='/contact'><a href="#">Контакты <i
                                                    className="fas fa-chevron-down"></i></a></Link></li>
                                                <li><Link to='/delivery'><a href="#">Доставка и оплата <i
                                                    className="fas fa-chevron-down"></i></a></Link></li>
                                            </ul>
                                        </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

        )
    }

}