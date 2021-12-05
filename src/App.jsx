import './App.css'
//Se importan las rutas de las vistas para conectar con rutas
import Home from 'pages/home'
import Categories from 'pages/client/categories'
import Products from 'pages/client/products'
import Orders from 'pages/client/orders'
import DeliveryRequest from 'pages/client/deliveryreq'
import DeliveryConfirm from 'pages/client/deliveryconf'
import Politics from 'pages/client/politics'
import Login from 'pages/admin/login'
import Welcome from 'pages/admin/welcome'
import ProductManagement from 'pages/admin/productmanag'
import SellerManagement from 'pages/admin/sellermanag'
import SalesReport from 'pages/admin/salesrep'
import Report from 'pages/admin/report'
import OrdersClient from 'pages/admin/ordersclient'
import Registry from 'pages/admin/registry'
import Test from 'pages/admin/testfield'
import axios from 'axios';
//Se importa React-Router-Dom
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

axios.defaults.baseURL = "https://masasapp.herokuapp.com/"

const estaAutenticado=()=>{

  const token=sessionStorage.getItem('token')
  if(token){
    return true
  }
  else{
    return false
  }
}
  const MyRoute=(props)=>{
    return estaAutenticado()?<Route{...props}/>:<Redirect to='/login'/>
  }

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/politics'>
            <Politics />
          </Route>
          <Route path='/categories'>
            <Categories />
          </Route>
          <Route path='/products' component={SubRoutes}  />
          <Route path='/orders'>
            <Orders />
          </Route>
          <Route path='/deliveryreq'>
            <DeliveryRequest />
          </Route>
          <Route path='/deliveryconf'>
            <DeliveryConfirm />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <MyRoute path='/welcome'>
            <Welcome />
          </MyRoute>
          <MyRoute path='/productmanag'>
            <ProductManagement />
          </MyRoute>
          <MyRoute path='/sellermanag'>
            <SellerManagement />
          </MyRoute>
          <MyRoute path='/salesrep'>
            <SalesReport />
          </MyRoute>
          <MyRoute path='/report'>
            <Report />
          </MyRoute>
          <MyRoute path='/ordersclient'>
            <OrdersClient />
          </MyRoute>
          <MyRoute path='/registry'>
            <Registry />
          </MyRoute>
          <Route path='/test'>
            <Test />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App

function SubRoutes() {
  return(
    <Switch>
      <Route path="/products/:category?" render={props => <Products {...props} />} />
      <Route path="*">
        <Redirect to="/orders" />
      </Route>
    </Switch>
  );
}


