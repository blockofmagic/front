//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";
import { Link } from "react-router-dom";

//> Images
import Logo from "../../../assets/navigation/Logo.png";
//#endregion

//#region > Components
/**
 * @class The navbar for all pages. Contains a login button, a profile menu
 *        depending on whether you are logged in or not and a search field,
 *        to find other users.
 */
class Navbar extends React.Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            <img
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Logo"
            />{" "}
            BlockOfMagic
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/transactions">
                  Transactions
                </a>
              </li>
            </ul>
            <a href="/profile">
              <img
                src="https://avatars1.githubusercontent.com/u/55298934?s=460&u=37517fbfe6f4bc3aa2b1f92fa58a348bd977abbe&v=4"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Logo"
              />{" "}
            </a>
          </div>
        </nav>
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
export default Navbar;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Nico Schett
 */
