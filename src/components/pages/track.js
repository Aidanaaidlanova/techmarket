import React, {Component} from "react";
import "../styles/bootstrap4/bootstrap.min.css";
import "../styles/regular_responsive.css";
import "../styles/regular_styles.css";
import "../styles/blog_styles.css";
import b from '../images/shop_background.jpg';
import {InputGroup, FormControl, Button, Form,Modal} from 'react-bootstrap';
import {STATUS} from "../../constants";
import Header from '../header.js';
import Footer from '../footer.js';
import axios from 'axios';
const Swal = require('sweetalert2');

export default class Track extends Component {
  state = {
        ids: '',
        resul: []
  }


    getInfo= () => {
        axios.get(`http://46.101.236.211:8666/storage/status/?id=${this.state.ids}`)
            .then(response => {
                this.setState({resul: response.data});
                Swal.fire({text: `${this.state.resul[0].name}, ваш заказ ${STATUS[this.state.resul[0].status]}`})
                console.log("Resul: ", this.state.resul)
                console.log("Name: ",this.state.resul[0].name)
            })
            .catch(error => {
                console.log(error);
            });
  }
  handleIdChange = () => {
    this.setState({
      ids: this.search.value
    },this.handleSubmit

    )
  }

   




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
                            <h4>Введите код вашего заказа, который мы отправили в письме</h4>
                            <Form >
                                <InputGroup className="mb-3">
                                    <FormControl
                                        type = "text"
                                        ref={input => this.search = input}
                                        aria-label="Код заказа"
                                        onChange={this.handleIdChange}
                                    />
                                    <InputGroup.Append>
                                        <Button onClick = {this.getInfo}>Проверка</Button>
                                    </InputGroup.Append>
                                </InputGroup>
                                </Form>
                                <h3>{this.state.resul.name}</h3>
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