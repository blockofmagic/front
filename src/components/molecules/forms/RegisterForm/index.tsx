//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";
//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { Form, FormGroup, FormControl, Button } from "react-bootstrap";
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
class RegisterForm extends React.Component<Props> {
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
        <Form className="text-left">
          <FormGroup controlId="formGroupUsername">
            <label>Username</label>
            <FormControl type="text" placeholder="Enter username" />
          </FormGroup>
          <FormGroup controlId="formGroupEmail">
            <label>Email address</label>
            <FormControl type="email" placeholder="Enter email" />
          </FormGroup>
          <FormGroup controlId="formGroupPassword">
            <label>Password</label>
            <FormControl type="password" placeholder="Password" />
          </FormGroup>
          <Button type="submit" className="btn-info btn-lg btn-block">
            Sign up
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
export default RegisterForm;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Nico Schett
 */
