import React, { Component } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, Form ,FormGroup} from 'react-bootstrap';



class Register extends Component { 
 
 
  handleSubmit = (e) => {
    e.preventDefault();
    const _Data = {
      roleid: this.roleid,
      username: this.UserName,
      password: this.Password,
      displayname: this.DisplayName,
    };
    axios
      .post("http://localhost:8080/api/users/signup", _Data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <section className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-5 mx-auto">
              <div id="second">
                <div className="myform form register__div">
                  <div className="logo mb-2">
                    <div className="col-md-12 text-center">
                      <h1>SignUp</h1>
                    </div>
                  </div>
                  <Form onSubmit={this.handleSubmit} name="registration">
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>select Role_ID</Form.Label>
                      <Form.Control onChange={ e => (this.roleid = e.target.value)} as="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group className="form-group">
                      <label htmlFor="exampleInputEmail1">User Name</label>
                      <input
                        onChange={(e) => (this.UserName = e.target.value)}
                        type="text"
                        name="firstname"
                        className="form-control"
                        id="firstname"
                        aria-describedby="emailHelp"
                        placeholder="Username"
                      />
                    </Form.Group>
                    <Form.Group className="form-group">
                      <label htmlFor="exampleInputEmail1">Password</label>
                      <input
                        onChange={(e) => (this.Password = e.target.value)}
                        type="password"
                        name="password"
                        id="password"
                        className="form-control"
                        aria-describedby="emailHelp"
                        placeholder="Enter Password"
                      />
                    </Form.Group>
                    <Form.Group className="form-group">
                      <label htmlFor="exampleInputEmail1">Display Name</label>
                      <input
                        onChange={(e) => (this.DisplayName = e.target.value)}
                        type="text"
                        name="lastname"
                        className="form-control"
                        id="lastname"
                        aria-describedby="emailHelp"
                        placeholder="Enter display name"
                      />
                    </Form.Group>
                    <Form.Group className="col-md-12 text-center mb-3">
                      <button
                        onClick={this.handleSubmit}
                        type="submit"
                        className=" btn btn-block mybtn btn-primary tx-tfm"
                      >
                        SigUp
                      </button>
                    </Form.Group>
                    <div className="col-md-12 ">
                      <Form.Group className="form-group">
                        <p className="text-center">
                          <Link to={"/Login"}>Already have an account?</Link>
                        </p>
                      </Form.Group>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Register;
