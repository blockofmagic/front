//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";
import { Form, FormGroup, FormControl, Button } from "react-bootstrap";
//#endregion

//#region > Components
/**
 * @class The navbar for all pages. Contains a login button, a profile menu
 *        depending on whether you are logged in or not and a search field,
 *        to find other users.
 */
class SettingsPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="/settings">
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/settings">
                  Contacts
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/settings">
                  Wallet
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/settings">
                  Security
                </a>
              </li>
            </ul>
          </div>
          <div className="col-8">
            <h3>Settings</h3>
            <img
              src="https://avatars1.githubusercontent.com/u/55298934?s=460&u=37517fbfe6f4bc3aa2b1f92fa58a348bd977abbe&v=4"
              className="img-fluid"
              width="175rem"
            />
            <p />
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
              <Button type="submit" className="btn-success btn-lg btn-block">
                Save Settings
              </Button>
            </Form>
          </div>
        </div>
      </div>
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
export default SettingsPage;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Nico Schett
 */
