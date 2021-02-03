import React, { Component } from 'react';
import axios from 'axios'

class Home extends Component {
  
    userData = {};

    componentDidMount = () => {
        const config = {
          headers: {
            Authorization: "bearer" + localStorage.getItem("token"),
          }
        };
        axios.get("http://localhost:8080/api/users/user", config)
          .then((res) => {
            this.setState( {userData :res.data } );
          })
          .catch((err) => console.log(err));
      }
  
    render() {

        if (this.setState.user){
            return(
                <h2>ID: {this.state.user.id} {this.state.user.role}</h2>
            )
        }
        return (
            <div className="container py-5" >
                <div className="jumbotron">
                <h1>Home Page</h1>
                <h4>LOGGED_IN_XXX: False</h4>
                </div>
            </div>
        );
    }
}

export default Home;
