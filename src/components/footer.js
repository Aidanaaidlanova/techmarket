import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./styles/contact_responsive.css";
import "./styles/contact_styles.css";
import "./styles/blog_styles.css";

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 footer_col">
                            <div className="footer_column footer_contact">

                                <div className="footer_title">Остались вопросы?</div>
                                <div className="footer_phone">+996 705 09 39 59</div>
                                <div className="footer_contact_text">
                                    <p>Бишкек, Байтик баатыра 70</p>
                                </div>
                                <div className="footer_social">
                                    <ul>
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-google"></i></a></li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 offset-lg-2">
                            <div className="footer_column">
                                <Link to="/aboutus">
                                    <div className="footer_title">О нас</div>
                                </Link>
                                <ul className="footer_list">
                                    <li><Link to='/delivery'>
                                        <div className="footer_title">Доставка</div>
                                    </Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2">
                            <div className="footer_column">
                                <Link to="contact">
                                    <div className="footer_title">Контакты</div>
                                </Link>
                                <ul className="footer_list ">
                                    <li><Link to="/tracking">
                                        <div className="footer_title">Отслеживание товара</div>
                                    </Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2">
                            <div className="footer_column">
                                <Link to="/cart">
                                    <div className="footer_title">Корзина</div>
                                </Link>
                                <ul className="footer_list ">
                                    <li><a>
                                        <div className="footer_title">Служба поддержки</div>
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }

}
 