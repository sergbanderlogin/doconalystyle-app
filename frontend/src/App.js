import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { signout } from './actions/userActions';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import OrderScreen from './screens/OrderScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductScreen from './screens/ProductScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/SigninScreen';

function App() {
  const cart = useSelector((state) => state.cart)
  const {cartItems} = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const {userInfo} = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  }

  return (
      <BrowserRouter>
        <div className='grid-container'>
          <header className='row'>
            <div>
              <Link className='brand' to='/'>DoconalyStyle</Link>
            </div>
            <div>
              <Link to='/cart'>Cart {cartItems.length > 0 && (<span className='badge'>{cartItems.length}</span>)}</Link>
              {userInfo ? (
                  <div className="dropdown">
                    <Link to="#">
                      {userInfo.name} <i className="fa fa-caret-down"/>{' '}
                    </Link>
                    <ul className="dropdown-content">
                      <li>
                        <Link to="#signout" onClick={signoutHandler}>
                          Sign Out
                        </Link>
                      </li>
                    </ul>
                  </div>
              ) : (
                  <Link to="/signin">Sign In</Link>
              )}
            </div>
          </header>
          <main>
            <Route path='/cart/:id' component={CartScreen}/>
            <Route path='/product/:id' component={ProductScreen}/>
            <Route path="/signin" component={SigninScreen}/>
            <Route path="/register" component={RegisterScreen}/>
            <Route path='/shipping' component={ShippingAddressScreen}/>
            <Route path='/payment' component={PaymentMethodScreen}/>
            <Route path='/placeorder' component={PlaceOrderScreen}/>
            <Route path="/order/:id" component={OrderScreen}></Route>
            <Route path='/' component={HomeScreen} exact/>
          </main>
          <footer className='row center'>All right reserved © 2020</footer>
        </div>
      </BrowserRouter>
  )
}

export default App
