//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> Images
import Logo from "../../../assets/navigation/Logo.png";
//#endregion

//#region > Components
/** @class The footer component for all pages */
class Footer extends React.PureComponent {
  render() {
    return (
      <footer className="page-footer font-small blue">
        <div className="container text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase">
                <a className="navbar-brand" href="/">
                  <img
                    src={Logo}
                    width="75"
                    height="75"
                    className="d-inline-block align-top"
                    alt="Logo"
                  />
                </a>
              </h5>
              <p>The magical blockchain for everyone.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-3" />
            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Legal</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/privacy">Privacy</a>
                </li>
                <li>
                  <a href="/terms">Terms of Service</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Useful Links</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="/faq">FAQ</a>
                </li>
                <li>
                  <a href="https://github.com/snek-at/front/blob/master/CONTRIBUTING.md">
                    Code Quality
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">
          Copyright © 2020
          <a href="https://github.com/schettn"> Schett Nico</a>
          <p className="mb-2 mt-1 font-weight-bold madeby">
            Made with{" "}
            <i
              data-test="fa"
              aria-hidden="true"
              className="fa fa-heart pulse green-text"
            ></i>{" "}
            by{" "}
            <a
              href="https://github.com/BlockOfMagic"
              target="_blank"
              rel="noopener noreferrer"
            >
              us
            </a>
            .
          </p>
        </div>
      </footer>
    );
  }
}
//#endregion

//#region > Exports

/**
 * Got access to the history object’s properties and the closest
 * <Route>'s match.
 */
export default Footer;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Nico Schett
 */
