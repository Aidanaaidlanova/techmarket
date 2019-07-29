import React, {Component} from "react";
import "../styles/bootstrap4/bootstrap.min.css";
import "../styles/regular_responsive.css";
import "../styles/regular_styles.css";
import "../styles/blog_styles.css";
import b from '../images/shop_background.jpg';
import {InputGroup, FormControl, Button} from 'react-bootstrap';
import Header from '../header.js';
import Footer from '../footer.js';

export default class Track extends Component {
    render() {
        return (
            <body>
            <React.Fragment>
                <Header/>
                <div class="home">
                    <div class="home_background parallax-window" data-parallax="scroll"><img class="blog_image"
                                                                                             src={b}/></div>
                    <div class="home_overlay"></div>
                    <div class="home_content d-flex flex-column align-items-center justify-content-center">
                        <h2 class="home_title">Отслеживание товара</h2>
                    </div>
                </div>
                <div class="single_post">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 offset-lg-2">
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="Введите код заказа"
                                        aria-label="Код заказа"
                                        aria-describedby="basic-addon2"
                                    />
                                    <InputGroup.Append>
                                        <Button primary>Проверка</Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
            </body>

        )
    }
}