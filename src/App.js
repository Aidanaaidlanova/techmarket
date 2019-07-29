import React, {Component} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Route, Switch} from "react-router-dom";
import ProductList from "./components/pages/ProductList";
import Details from "./components/pages/Details";
import Default from "./components/pages/Default";
import Cart from "./components/Cart";
import Modal from "./components/Modal";
import Search from "./components/pages/search";
import aboutus from './components/pages/aboutus';
import contact from './components/pages/contact';
import Delivery from './components/pages/delivery';
import shop from './components/pages/shop';
import order from './components/pages/order';
import Track from './components/pages/track';

const api = "http://46.101.236.211:8666";

class App extends Component {
    render() {
        return (
            <React.Fragment>

                <Switch>
                    <Route exact path="/" component={ProductList}/>
                    <Route path="/details" component={Details}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/aboutus" component={aboutus}/>
                    <Route path="/contact" component={contact}/>
                    <Route path="/delivery" component={Delivery}/>
                    <Route path="/shop/subcategory/:id" component={shop}/>
                    <Route path="/search" component={Search}/>
                    <Route path="/order" component={order}/>
                    <Route path="/tracking" component={Track}/>
                    <Route component={Default}/>
                </Switch>
                <Modal/>
            </React.Fragment>
        );
    }
}

export default App;
