import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Form from './components/Form';
import NavBar from './components/NavBar';
import Watch from './components/Watch';
import Watches from './components/Watches';
// import WatchDetails from './components/WatchDetails';
// import SignUp from './components/SignUp';
import Home from './components/Home';
import Cart from './components/Cart';
import Profile from './components/Profile';
import Search from './components/Search';
import './App.css';


class App extends Component {

  state={
    watches: [],
    token: "",
    username: "",
    current_order: {
      id: 0,
      transactions: []
    },
    past_orders: [],
    searchTerm: ""
  }

  changeSearchTerm = (termFromChild) => {
    this.setState({
      searchTerm: termFromChild
    })
  }

  componentDidMount() {
    fetch('http://localhost:3000/watches')
      .then(res => res.json())
      .then((arrayOfWatches) => {
        this.setState({
          watches: arrayOfWatches
        })
      })

    if(localStorage.token){
      fetch("http://localhost:3000/keep_logged_in", {
        method: "GET",
        headers: {
          "Authorization": localStorage.token
        }
      })
        .then(res => res.json())
        .then(this.helpHandleResponse)
    } 
  }

  handleLoginSubmit = (userInfo) => {
    console.log("Login has been submitted")
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({
        username: userInfo.username,
        password: userInfo.password
      })
    })
      .then(res => res.json())
      .then(this.helpHandleResponse)
  }

  handleRegisterSubmit = (userInfo) => {
    console.log("Register form has been submitted")

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({
        username: userInfo.username,
        password: userInfo.password
      })
    })
    .then(res => res.json())
    .then(this.helpHandleResponse)
  }

  handleLogOut = () => {
    this.setState({
      watches: [],
      token: "",
      username: "",
      current_order: {
        id: 0,
        transactions: []
      },
      past_orders: []
    })
    localStorage.clear()
  }

  helpHandleResponse = (resp) => {
    if(resp.error){
      console.log(resp.error)
    } else {
      localStorage.token = resp.token
      this.setState({
        token: resp.token,
        username: resp.user.username,
        current_order: resp.user.current_order,
        past_orders: resp.user.past_orders
      })
    }
  }

  renderForm = (routerProps) => {
    if(this.state.token){
      return <button className="btn btn-danger" onClick={this.handleLogOut}>Log Out</button>
    }
    
    if(routerProps.location.pathname === "/login"){
      return <Form
        formName="Login Form"
        handleSubmit={this.handleLoginSubmit}
      />
    } else if (routerProps.location.pathname === "/signup") {
      return <Form
        formName="Register Form"
        handleSubmit={this.handleRegisterSubmit}
      />
    }
  }


  placingWatchOrder = (watch_id) => {
    fetch("http://localhost:3000/transactions", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        watch_id: watch_id,
        cart_id: this.state.current_order.id
      })
    })
    .then(res => res.json())
    .then(newlyCreatedWatchOrder => {
      let copyOfWatchOrdersForCart = [...this.state.current_order.transactions, newlyCreatedWatchOrder]
      let copyOfOrder = {
        ...this.state.current_order, 
        transactions: copyOfWatchOrdersForCart
      }
      this.setState({
        current_order: copyOfOrder
      })
    })
  }

  cartSwap = () => {
    fetch(`http://localhost:3000/carts/${this.state.current_order.id}/transform`, {
      method: "PATCH",
      headers: {
        "Authorization": this.state.token
      }
    })
      .then(res => res.json())
      .then((resp) => {
        let copyOfPastOrders = [...this.state.past_orders, resp.transformed_cart]
        this.setState({
          current_order: resp.current_order,
          past_orders: copyOfPastOrders
        })
      })
  }


  render() { 
    console.log("STATE", this.state);

    let {watches, searchTerm} = this.state

    let filteredArray = watches.filter((watch) => {
      return watch.name.toLowerCase().includes(searchTerm.toLowerCase())
    })

    return (
      <>
        <NavBar />

        {/* < Search 
          searchTerm={this.state.searchTerm}
          changeSearchTerm={this.changeSearchTerm}
        /> */}

        <main className="container">
          <Switch>
            <Route path="/login" render={this.renderForm}/>
            <Route path="/signup" render={ this.renderForm } />
            <Route path="/watches" >
              < Search 
                searchTerm={this.state.searchTerm}
                changeSearchTerm={this.changeSearchTerm}
              />
              <Watches
                watches={filteredArray}
                token={this.state.token}
                placingWatchOrder={this.placingWatchOrder}
                // cartSwap={this.cartSwap}
              />
            </Route>
            <Route path="/cart" > 
              <Cart
                cartSwap={this.cartSwap}
                current_order={this.state.current_order}
                past_orders={this.state.past_orders}
              />
            </Route>
            <Route path="/profile" component={Profile}></Route>
            {/* <Route path="/signup" component={SignUp}></Route> */}
            <Route path="/watches/:id" component={Watch}/>
            <Route path="/" exact component={Home} />
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
