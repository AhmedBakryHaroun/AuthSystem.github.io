import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      pasword: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handlePasswordChanged = this.handlePasswordChanged.bind(this);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  handleUserNameChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };
  handlePasswordChanged = (e) => {
    this.setState({
      pasword: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const _Data = {
      username: this.UserName,
      password: this.Password,
    };
    axios
      .post("http://localhost:8080/api/users/login", _Data)
      .then( res => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem('message', res.body.message);
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <section className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-5 mx-auto">
              <div id="first">
                <div className="myform form ">
                  <div className="logo mb-3">
                    <div className="col-md-12 text-center">
                      <h1>Login</h1>
                    </div>
                  </div>
                  <form
                    className="login__form"
                    onSubmit={this.handleSubmit}
                    method="post"
                    name="login"
                  >
                    <div className="form-group">
                      <label htmlFor="username">username</label>
                      <input
                        onChange={this.handleUserNameChange}
                        value={this.state.username}
                        type="text"
                        name="username"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Password</label>
                      <input
                        onChange={this.handlePasswordChanged}
                        value={this.state.pasword}
                        type="password"
                        name="password"
                        id="password"
                        className="form-control"
                        aria-describedby="emailHelp"
                        placeholder="Enter Password"
                      />
                    </div>
                    <div className="col-md-12 text-center ">
                      <button
                        onClick={this.handleSubmit}
                        type="submit"
                        className=" btn btn-block mybtn btn-primary tx-tfm"
                      >
                        Login
                      </button>
                    </div>

                    <div className="col-md-12 ">
                      <div className="login-or">
                        <hr className="hr-or" />
                        <span className="span-or">or</span>
                      </div>
                    </div>
                    <div className="form-group">
                      <p className="text-center">
                        Don't have account?
                        <br />{" "}
                        <Link to={"/Register"} id="signup">
                          SignUp
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
