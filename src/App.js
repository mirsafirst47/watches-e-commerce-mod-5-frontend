import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Form from './components/Form';
import NavBar from './components/NavBar';
import Watches from './components/Watches';
import PastOrders from './components/PastOrders';
import About from './components/About';
import Home from './components/Home';
import Cart from './components/Cart';
import Search from './components/Search';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';


class App extends Component {

  state = {
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
      // toast.success("You are now logged in")
  }

  handleSignUpSubmit = (userInfo) => {
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
    toast("Sign up successful")
  }

  handleLogOut = () => {
    this.setState({
      // watches: [],
      token: "",
      username: "",
      current_order: {
        id: 0,
        transactions: []
      },
      past_orders: []
    })
    localStorage.clear()
    toast.success("Goodbye!")
  }

  helpHandleResponse = (resp) => {
    if(resp.error){
      console.log(resp.error)
      toast.error("Wrong username or password")
    } else {
      localStorage.token = resp.token
      this.setState({
        token: resp.token,
        username: resp.user.username,
        current_order: resp.user.current_order,
        past_orders: resp.user.past_orders
      })
      toast("Welcome!")
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
        handleSubmit={this.handleSignUpSubmit}
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

  deleteWatchTransaction = (transaction) => {
    fetch(`http://localhost:3000/transactions/${transaction.id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(deletedTransaction => {
      console.log(deletedTransaction)

      let updatedCart = this.state.current_order.transactions.filter(transaction => {
        console.log(transaction)
        return transaction.id !== deletedTransaction.id
      })
      let copyOfCart = {
        ...this.state.current_order, transactions: updatedCart
      }
      this.setState({
        current_order: copyOfCart
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
        let copyOfPastOrders = [...this.state.past_orders, resp.transformed_order]
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
        <ToastContainer />
        <NavBar username={this.state.username}/>
        <main role='main' className="container-fluid">
          <Switch>
            <Route path="/login" render={this.renderForm}/>
            <Route path="/signup" render={ this.renderForm } />
            <Route username={this.state.username} path="/watches" >
              < Search 
                searchTerm={this.state.searchTerm}
                changeSearchTerm={this.changeSearchTerm}
              />
              <Watches
                watches={filteredArray}
                placingWatchOrder={this.placingWatchOrder}
              />
            </Route>
            <Route path="/cart" > 
              <Cart
                cartSwap={this.cartSwap}
                deleteWatchTransaction={this.deleteWatchTransaction}
                current_order={this.state.current_order}
              />
            </Route>
            <Route path="/past_orders">
              <PastOrders 
                past_orders={this.state.past_orders}
              />
            </Route>
            <Route path="/about" component={About}/>
            <Route path="/" exact component={Home} />
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
