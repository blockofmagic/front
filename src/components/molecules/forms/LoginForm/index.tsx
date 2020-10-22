//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";
//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { Form, FormGroup, FormControl, Button, Alert } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";
//#endregion

//#region > Interfaces
interface Props {
  goTo: any;
}
//#endregion

//#region > Components
/**
 * @class The navbar for all pages. Contains a login button, a profile menu
 *        depending on whether you are logged in or not and a search field,
 *        to find other users.
 */
class LoginForm extends React.Component<Props> {
  state = {
    login_username: "",
    login_password: "",
    errorMsg: "",
    loginFail: false,
  };

  handleChangeManual = (name: any, value: any, id: any) => {
    this.setState({
      [name]: value,
    });
  };

  login = async (event: any) => {
    // Prevent page from reloading
    event.preventDefault();
    event.stopPropagation();

    let errors = [];

    if (this.state.login_username === "") {
      errors.push({
        code: 20,
        weight: 10,
      });
    }

    if (this.state.login_password === "") {
      errors.push({
        code: 21,
        weight: 10,
      });
    }

    // Check if there are any errors
    if (errors.length > 0) {
      this.setState({
        errors,
      });
    } else {
      // Proceed to login
      const result = await this.props.login({
        username: this.state.login_username,
        password: this.state.login_password, // Hash password
      });

      //#TSID6
      //console.log("LOGIN FORM PROCEED TO LOGIN", result);
      if (result?.payload.error) {
        this.setState({
          loginFail: true,
          errorMsg: result.payload.message,
        });
      }
    }
  };

  render() {
    const { goTo } = this.props;

    return (
      <>
        <div className="text-left">
          <small className="text-muted clickable" onClick={() => goTo(0)}>
            <ArrowLeft />
            Back
          </small>
        </div>
        {this.state.loginFail && (
          <Alert className="alert-danger">{this.state.errorMsg}</Alert>
        )}
        <Form className="text-left">
          <FormGroup controlId="formGroupUsername">
            <label>Username</label>
            <FormControl
              type="text"
              placeholder="Enter username"
              onChange={(e: any) =>
                this.handleChangeManual("login_username", e.target.value, 20)
              }
              value={this.state.login_username}
            />
          </FormGroup>
          <FormGroup controlId="formGroupPassword">
            <label>Password</label>
            <FormControl
              type="password"
              placeholder="Password"
              onChange={(e: any) =>
                this.handleChangeManual("login_password", e.target.value, 21)
              }
              value={this.state.login_password}
            />
          </FormGroup>
          <Button type="submit" className="btn-success btn-block">
            Login
          </Button>
        </Form>
      </>
    );
  }
}
//#endregion

//#region > Exports

/**
 * Provides its connected component with the pieces of the data it needs from
 * the store, and the functions it can use to dispatch actions to the store.
 *
 * Got access to the history object’s properties and the closest
 * <Route>'s match.
 */
export default LoginForm;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Nico Schett
 */
