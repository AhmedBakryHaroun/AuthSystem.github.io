import React, { Component } from "react";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Register from "./Components/Register";
import "./index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }
  componentDidMount = () => {
    const config = {
      headers: {
        Authorization: "bearer" + localStorage.getItem("token"),
      }
    };
    axios.get("http://localhost:8080/api/users/roles", config)
      .then((res) => {
        this.setState( {user:res.data } );
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav user={this.state.user} />
          <Switch>
            <Route exact path={"/"} component={() => <Home user={this.state.user} />}/>
            <Route path={"/Login"} component={Login} />
            <Route path={"/Register"} component={Register} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
