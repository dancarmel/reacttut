import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";
import NotFound from "./components/common/notfound";
import Navbar from "./components/common/navbar";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import MovieForm from "./components/movieform";
import LoginForm from "./components/loginform";
import { Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />

        <main role="main" className="container">
          <div className="content">
            <Switch>
              <Route path="/movies/:id" component={MovieForm} />
              <Route path="/movies" exact component={Movies} />

              <Route path="/customers" component={Customers} />
              <Route path="/rentals" component={Rentals} />
              <Route path="/not-found" component={NotFound} />
              <Route path="/login" component={LoginForm} />

              <Redirect from="/" exact to="/movies" />
              <Redirect to="/not-found" />
            </Switch>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
