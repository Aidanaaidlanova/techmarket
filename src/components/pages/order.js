
import React, {Component} from "react";
import "../plugins/fontawesome-free-5.0.1/css/fontawesome-all.css";
import "../styles/bootstrap4/bootstrap.min.css";
import "../styles/contact_responsive.css";
import "../styles/contact_styles.css";
import "../styles/blog_styles.css";
import b from '../images/shop_background.jpg';
import {Button, Form, Col} from 'react-bootstrap';
import Header from '../header.js';
import Footer from '../footer.js';
import axios from 'axios';
const Swal = require('sweetalert2');


export default class order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Alice",
            phone: "+996555444111",
            email: "alice@mail.com",
            address: "Pushkin st.-22",
            product_list_items: this.props.location.state.prodId.map(one=>{return({
            product: one, count: 1
        })}),
                comment: "",
                delivery: 1,
                total_sum: "10000"
           
        }
    }

    componentDidMount () {
        console.log(this.state.product_list_items);
        console.log(this.props.location.state.prodId);
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();

        const order = {
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            phone: this.state.phone,
            product_list_items: this.state.product_list_items,
            comment: this.state.comment,
            delivery: this.state.delivery,
            total_sum: this.state.total_sum

        };
        console.log(order);
    fetch(`http://46.101.236.211:8666/storage/cheque/`, {
  method: 'POST',
    headers: {
    'Content-Type': 'application/json'
},
body: JSON.stringify(order),
})
.then(res=>Swal.fire({text: `Ваш заказ оформлен. Ожидайте письмо на почту.`}))
  .catch(er=>{console.log("Not OK")});


}


render() {

    return(

      <body>
      <Header/>
      <div class="home">
          <div class="home_background parallax-window" data-parallax="scroll"><img class="blog_image"
                                                                                   src={b}/></div>
          <div class="home_overlay"></div>
          <div class="home_content d-flex flex-column align-items-center justify-content-center">
              <h2 class="home_title">Оформить заказ</h2>
              <h2></h2>
          </div>
      </div>
      <div class="single_post">
          <div class="container">
              <div class="row">

                  <div class="col-lg-8 offset-lg-2">
                      <h4> Инструкция по оформлению заказа</h4>
                      <p> Пожалуйста проверьте все данные при оформлении доставки, введите верный номер и адрес доставки (при введении неправильного номера или же адреса мы не несем ответственность за дотавку заказа). В комментариях можете ввеси дополнительную информацию к доставке. </p>

                      <div class="single_post_title"></div>
                      <Form onSubmit={this.handleSubmit}>
                          <Form.Label>ФИО</Form.Label>
                          <Form.Control type="text"
                                        name="name"
                                        onChange={this.handleChange}/>
                          <br/>
                          <Form.Label>Email</Form.Label>

                          <Form.Control type="text"
                                        placeholder="Example@mail.com"
                                        name="email"
                                        onChange={this.handleChange}/>
                          <br/>

                          Aidlanova Aidana, [16.10.19 23:53]
                          <Form.Label>Адрес</Form.Label>
                          <Form.Control type="text"
                                        placeholder="ул. Чехова д.5 кв.87"
                                        name="address"
                                        onChange={this.handleChange}/>
                          <br/>
                          <Form.Label>Номер</Form.Label>
                          <Form.Control type="text"
                                        placeholder="+996 705 00 00 00"
                                        name="phone"
                                        onChange={this.handleChange}/>
                          <br/>
                          <Form.Label>Комментраии</Form.Label>
                          <br/>
                          <Form.Control type="text"
                                        placeholder="Привезти после 18:00"
                                        name="comment"
                                        onChange={this.handleChange}/>
                          <br/>
                          <Form.Label></Form.Label>

                          <Button variant="primary"
                                  type="submit">
                              Оформить заказ
                          </Button>
                      </Form>
                  </div>
              </div>
          </div>
      </div>
      <Footer/>
      </body>
    )

}
}