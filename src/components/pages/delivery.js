import React, {Component} from "react";
import "../plugins/fontawesome-free-5.0.1/css/fontawesome-all.css";
import "../styles/bootstrap4/bootstrap.min.css";
import "../styles/contact_responsive.css";
import "../styles/contact_styles.css";
import "../styles/blog_styles.css";
import b from '../images/shop_background.jpg';
import Header from '../header.js';
import Footer from '../footer.js';

export default class Delivery extends Component {
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
                        <h2 class="home_title">Доставка и оплата</h2>
                    </div>
                </div>
                <div class="single_post">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 offset-lg-2">
                                <div class="single_post_title">Условия оказания услуг:</div>
                                <div class="single_post_text">

                                    <p>Доставка заказов стоимостью свыше 1500 сом, по г. Бишкек* - бесплатная
                                        Доставка заказов стоимостью до 1500 сом, по г.Бишкек - 150 сом

                                        Доставка крупногабаритных** товаров, по г. Бишкек* - бесплатная

                                        Экспресс-доставка по г. Бишкек - 199 сом
                                    </p>
                                    <p>Время доставки:
                                        Если заказ, свыше 1500 сом, сделан до 15:00, то товар доставляется в течение
                                        дня.
                                        Если заказ, свыше 1500 сом, сделан после 15:00, то товар доставляется на
                                        следующий день (либо в течение дня при отсутствии загруженности).

                                        Заказы до 1500 сом доставляются в течение 3 дней.

                                        Экспресс-доставка осуществляется в течение 120 минут. (В случае загруженности
                                        курьерской службы и выбора определенной категории товара, экспресс-доставка
                                        может быть недоступна)
                                        * г. Бишкек - граница, удаленностью до 10 км по маршруту от офиса компании
                                        ** Крупногабаритный - единица товара объемом более 0.5 м3 или массой более 30
                                        кг.

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