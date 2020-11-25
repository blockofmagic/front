//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";
//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";
//#endregion

//#region > Interfaces
interface Props {
  goTo: any;
  /* isValidUsername: any;
  register: any;
  login: any; */
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
class RegisterForm extends React.Component<Props> {
  state = {
    loading: false,
    errors: [],
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password1: "",
    password2: "",
    redemptionCodeValue: "",
    redemptionCode: true,
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

  handleChange = (e: any, id: any) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => this.removeError(id)
    );
  };

  handleChangeManual = (name: any, value: any, id: any) => {
    this.setState(
      {
        [name]: value,
      },
      () => this.removeError(id)
    );
  };

  removeError = (id: any) => {
    // Preset errors to local variable
    let errors = this.state.errors;

    if (errors) {
      if (!Array.isArray(id)) {
        errors = errors.filter(function (obj: any) {
          return obj.code !== id;
        });
      } else {
        id.map((item) => {
          errors = errors.filter(function (obj: any) {
            return obj.code !== item;
          });
        });
      }

      this.setState({
        errors,
      });
    }
  };

  handleSubmit = async () => {
    const {
      username,
      firstname,
      lastname,
      email,
      password1,
      password2,
      redemptionCodeValue,
      redemptionCode,
    } = this.state;
    let errors = [];

    // Check if passwords match
    if (password1 !== "" && password2 !== "" && password1 !== password2) {
      errors.push({
        code: 1,
        msg: "Your passwords do not match.",
        weight: 10,
      });
    }

    if (firstname === "") {
      errors.push({
        code: 3,
        msg: "Please enter your first name.",
        weight: 8,
      });
    }

    if (lastname === "") {
      errors.push({
        code: 4,
        msg: "Please enter your last name.",
        weight: 8,
      });
    }

    if (email === "") {
      errors.push({
        code: 5,
        msg: "Please enter your email.",
        weight: 9,
      });
    }

    /* const isUsernameTaken = !(await this.props.isValidUsername(username));

    if (username === "" || (username && isUsernameTaken)) {
      errors.push({
        code: 6,
        msg: "Please enter a valid username.",
        weight: 10,
      });
    } */

    if (password1 === "") {
      errors.push({
        code: 7,
        msg: "Please enter a password.",
        weight: 10,
      });
    }

    if (password2 === "") {
      errors.push({
        code: 8,
        msg: "Please repeat your password.",
        weight: 10,
      });
    }

    if (redemptionCodeValue === "" && redemptionCode) {
      errors.push({
        code: 9,
        msg: "Please enter your promo code or contact us to receive one.",
        weight: 5,
      });
    }

    /* if (errors.length === 0) {
      this.setState(
        {
          loading: true,
        },
        async () => {
          await this.props.register(
            username,
            firstname,
            lastname,
            email,
            password1,
            redemptionCodeValue ? redemptionCodeValue : "none"
          );

          await this.props.login(username, password1);
        }
      );
    } else {
      this.setState({ errors });
    } */
  };

  render() {
    const { goTo } = this.props;

    return (
      <>
        <form className="text-left">
          <span className="text-muted small">Username</span>
          <input
            type="text"
            className={
              this.testForError(6)
                ? "form-control error mb-2"
                : "form-control mb-2"
            }
            name="username"
            onChange={(e) => this.handleChange(e, 6)}
            value={this.state.username}
          />
          <MDBRow className="mb-2">
            <MDBCol md="6">
              <span className="text-muted small">Firstname</span>
              <input
                type="text"
                className={
                  this.testForError(3) ? "form-control error" : "form-control"
                }
                name="firstname"
                onChange={(e) => this.handleChange(e, 3)}
                value={this.state.firstname}
              />
            </MDBCol>
            <MDBCol md="6">
              <span className="text-muted small">Lastname</span>
              <input
                type="text"
                className={
                  this.testForError(4) ? "form-control error" : "form-control"
                }
                name="lastname"
                onChange={(e) => this.handleChange(e, 4)}
                value={this.state.lastname}
              />
            </MDBCol>
          </MDBRow>
          <span className="text-muted small">E-Mail</span>
          <input
            type="email"
            className={
              this.testForError(5)
                ? "form-control mb-2 error"
                : "form-control mb-2"
            }
            name="email"
            onChange={(e) => this.handleChange(e, 5)}
            value={this.state.email}
          />
          <MDBRow>
            <MDBCol md="6">
              <span className="text-muted small">Password</span>
              <input
                type="password"
                className={
                  this.testForError([7, 1])
                    ? "form-control error"
                    : "form-control"
                }
                name="password1"
                onChange={(e) => this.handleChange(e, [7, 1])}
                value={this.state.password1}
              />
            </MDBCol>
            <MDBCol md="6">
              <span className="text-muted small">Confirm password</span>
              <input
                type="password"
                className={
                  this.testForError([8, 1])
                    ? "form-control error"
                    : "form-control"
                }
                name="password2"
                onChange={(e) => this.handleChange(e, [8, 1])}
                value={this.state.password2}
              />
            </MDBCol>
          </MDBRow>
        </form>
        <MDBBtn
          color="green"
          className="mb-0"
          onClick={this.handleSubmit}
          size="lg"
          /*disabled={!this.state.hasGitHub}*/
        >
          <MDBIcon icon="angle-right" />
          Join now
        </MDBBtn>
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
export default RegisterForm;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Nico Schett
 */
