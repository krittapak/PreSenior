import React, { Component } from "react";
import { register } from "./UserFunctions";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      fName: "",
      lName: "",
      username: "",
      position: "",
      password: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      fName: this.state.fName,
      lName: this.state.lName,
      username: this.state.username,
      password: this.state.password,
      position: this.state.position,
      enterpriseId: this.state.enterpriseId,
    };

    register(newUser).then((res) => {
      this.props.history.push(`/login`);
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
              <div className="form-group">
                <label htmlFor="fName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="fName"
                  placeholder="Enter First Name"
                  value={this.state.fName}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lName">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="lName"
                  placeholder="Enter Last Name"
                  value={this.state.lName}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="Enter Username"
                  value={this.state.username}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="position">Position</label>
                <input
                  type="position"
                  className="form-control"
                  name="position"
                  placeholder="Enter Position"
                  value={this.state.position}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="enterpriseId">Enterprise Id</label>
                <input
                  type="enterpriseId"
                  className="form-control"
                  name="enterpriseId"
                  placeholder="Enter Enterprise Id"
                  value={this.state.enterpriseId}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
