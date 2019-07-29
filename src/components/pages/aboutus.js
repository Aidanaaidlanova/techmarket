import React, {Component} from "react";
import "../styles/bootstrap4/bootstrap.min.css";
import "../styles/regular_responsive.css";
import "../styles/regular_styles.css";
import "../styles/blog_styles.css";
import b from '../images/shop_background.jpg';
import Header from '../header.js';
import Footer from '../footer.js';

export default class aboutus extends Component {
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
                        <h2 class="home_title">О нас</h2>
                    </div>
                </div>
                <div class="single_post">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 offset-lg-2">
                                <div class="single_post_title">Друзья, планируете совершить покупку с максимальным
                                    комфортом,
                                    минимальными рисками и выгодной цене?
                                </div>
                                <div class="single_post_text">

                                    <p>Вы оказались в нужном месте, в нужное время. Добро пожаловать к нам - в мир
                                        интернет-магазина TECHmarket !
                                        Сегодня это более 1000 товаров различных категорий.У нас вы обязательно найдете
                                        то, что ищите, а мы сделаем все,
                                        чтобы у вас остались приятные впечатления от нашей ценовой политики и сервисной
                                        службы. Мы знаем,
                                        как важно не тратить время на поиск и ожидание, поэтому наш сервис - это широкий
                                        ассортимент товаров в сочетании с пунктуальной и бесплатной доставкой
                                        (при определенной сумме). Мы знаем, что у нас не будет второго шанса произвести
                                        первое впечатление,
                                        а заслуженным доверием клиентов мы дорожим больше всего.</p>
                                    <p>Теперь делать покупки через интернет станет еще удобнее, потому что мы собрали в
                                        одном магазине:
                                        <ul type="square">
                                            <li>смартфоны и гаджеты</li>
                                            <li>компьютерную технику</li>
                                            <li>бытовую технику</li>
                                            <li>автотовары</li>
                                            <li>товары для красоты и здоровья</li>
                                            <li>аксессуары</li>
                                        </ul>

                                        Мы постоянно держим руку на пульсе и следим за новинками рынка, чтобы удивлять
                                        вас ассортиментом и экономить ваше время при покупках. А удовольствие от каждой
                                        покупки в нашем магазине будет для вас приятным подарком!
                                    </p>
                                </div>
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