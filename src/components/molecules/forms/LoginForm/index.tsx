//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";
//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBAlert, MDBBtn, MDBIcon } from "mdbreact";
//> Redux
// Allows to React components read data from a Redux store, and dispatch actions
// to the store to update data.
import { connect } from "react-redux";

//> Actions
// Functions to send data from the application to the store
import { loginAction } from "../../../../store/actions/userActions";
//#endregion

//#region > Interfaces
interface Props {
  goTo: any;
  login: any;
}

interface Error {
  code: any;
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
    errors: [],
  };

  testForError = (id: any) => {
    if (this.state.errors) {
      let rtn = this.state.errors.map((error: Error, i) => {
        if (!Array.isArray(id)) {
          if (error.code === id) {
            return true;
          } else {
            return false;
          }
        } else {
          let innerRtn = id.map((item, ikey) => {
            if (error.code === item) {
              return true;
            } else {
              return false;
            }
          });

          if (innerRtn.includes(true)) {
            return true;
          } else {
            return false;
          }
        }
      });

      if (rtn.includes(true)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
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

      console.log(result);
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
            <MDBIcon icon="angle-left" className="mr-1" />
            Back
          </small>
        </div>
        <p className="lead">Login to BlockOfMagic</p>
        {this.state.loginFail && (
          <MDBAlert color="danger" className="mt-3 mb-3">
            {this.state.errorMsg}
          </MDBAlert>
        )}
        <form onSubmit={this.login}>
          <input
            type="text"
            className={
              this.testForError(20)
                ? "form-control my-2 error"
                : "form-control my-2"
            }
            placeholder="Username"
            name="username"
            onChange={(e) =>
              this.handleChangeManual("login_username", e.target.value, 20)
            }
            value={this.state.login_username}
          />
          <input
            type="password"
            className={
              this.testForError(21)
                ? "form-control my-2 error"
                : "form-control my-2"
            }
            placeholder="Password"
            name="password"
            onChange={(e) =>
              this.handleChangeManual("login_password", e.target.value, 21)
            }
            value={this.state.login_password}
          />
          <p />
          <MDBBtn className="btn-block" type="submit">
            Login
          </MDBBtn>
        </form>
      </>
    );
  }
}
//#endregion

//#region > Redux Mapping
const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any) => {
  return { login: (user: any) => dispatch(loginAction(user)) };
};
//#endregion

//#region > Exports

/**
 * Provides its connected component with the pieces of the data it needs from
 * the store, and the functions it can use to dispatch actions to the store.
 *
 * Got access to the history object’s properties and the closest
 * <Route>'s match.
 */
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Nico Schett
 */
