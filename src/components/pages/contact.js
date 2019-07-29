import React, {Component} from "react";
import "../plugins/fontawesome-free-5.0.1/css/fontawesome-all.css";
import "../styles/bootstrap4/bootstrap.min.css";
import "../styles/contact_styles.css";
import "../styles/contact_responsive.css";
import Footer from '../footer.js';
import Header from '../header.js';
import c1 from '../images/contact_1.png';
import c2 from '../images/contact_2.png';
import c3 from '../images/contact_3.png';
import b from '../images/shop_background.jpg';

export default class contact extends Component {
    render() {
        return (
            <body>
            <Header/>
            <div class="home">
                <div class="home_background parallax-window" data-parallax="scroll"><img class="blog_image" src={b}/>
                </div>
                <div class="home_overlay"></div>
                <div class="home_content d-flex flex-column align-items-center justify-content-center">
                    <h2 class="home_title">Контакты</h2>
                </div>
            </div>
            <div class="contact_info">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-10 offset-lg-1">
                            <div
                                class="contact_info_container d-flex flex-lg-row flex-column justify-content-between align-items-between">


                                <div class="contact_info_item d-flex flex-row align-items-center justify-content-start">
                                    <div class="contact_info_image"><img src={c1} alt=""/></div>
                                    <div class="contact_info_content">
                                        <div class="contact_info_title">Телефон</div>
                                        <div class="contact_info_text">0(555) 96-23-77</div>
                                    </div>
                                </div>


                                <div class="contact_info_item d-flex flex-row align-items-center justify-content-start">
                                    <div class="contact_info_image"><img src={c2} alt=""/></div>
                                    <div class="contact_info_content">
                                        <div class="contact_info_title">Почта</div>
                                        <div class="contact_info_text">support@techmarket.kg</div>
                                    </div>
                                </div>


                                <div class="contact_info_item d-flex flex-row align-items-center justify-content-start">
                                    <div class="contact_info_image"><img src={c3} alt=""/></div>
                                    <div class="contact_info_content">
                                        <div class="contact_info_title">Адрес</div>
                                        <div class="contact_info_text">г. Бишкек, ул. Ломоносова 65</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contact_map">
                <div id="google_map" class="google_map">
                    <div class="map_container">
                        <div id="map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8943.398535961143!2d74.43963848031811!3d43.004607125760295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec2f1ea92f727%3A0xd8705e609d5e2183!2z0YPQuy4g0JvQvtC80L7QvdC-0YHQvtCy0LAsINCc0LDQvdCw0YE!5e0!3m2!1sru!2skg!4v1559503149476!5m2!1sru!2skg"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            </body>


        )
    }

}