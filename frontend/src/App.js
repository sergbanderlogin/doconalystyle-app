import React from 'react';
import {BrowserRouter, Link, Route} from "react-router-dom";
import {useSelector} from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

function App() {
  const cart = useSelector((state) => state.cart);
  const {cartItems} = cart;
  return (
      <BrowserRouter>
        <div className="grid-container">
          <header className="row">
            <div>
              <Link className="brand" to="/">DoconalyStyle</Link>
            </div>
            <div>
              <Link to="/cart">Cart {cartItems.length > 0 && (
                  <span className="badge">{cartItems.length}</span>
              )}</Link>
              <Link to="/signin">Sign In</Link>
            </div>
          </header>
          <main>
            <Route path={"/cart/:id"} component={CartScreen}/>
            <Route path="/product/:id" component={ProductScreen}/>
            <Route path="/" component={HomeScreen} exact/>
          </main>
          <footer className="row center">All right reserved © 2020</footer>
        </div>
      </BrowserRouter>
  );
}

export default App;