//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";
// DOM bindings for React Router
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer,
  MDBSmoothScroll,
  MDBBtn,
} from "mdbreact";

//> Style sheet
import "./navbar.scss";
//> Images
import Logo from "../../../assets/navigation/Logo.png";
//#endregion

//#region > Interfaces
interface Props extends RouteComponentProps {}
//#endregion

//#region > Components
/**
 * @class The navbar for all pages. Contains a login button, a profile menu
 *        depending on whether you are logged in or not and a search field,
 *        to find other users.
 */
class Navbar extends React.Component<Props> {
  state = { isOpen: false };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { history } = this.props;
    const { location } = history;

    return (
      <MDBNavbar color="light" light expand="md">
        <MDBContainer>
          {location.pathname === "/" ? (
            <MDBSmoothScroll to="home" className="d-inline">
              <MDBNavbarBrand className="flex-center">
                <img
                  src={Logo}
                  alt="BlockOfMagic Logo"
                  className="img-fluid mr-2"
                  width="40px"
                />
                <span className="font-weight-bold">BlockOfMagic</span>
              </MDBNavbarBrand>
            </MDBSmoothScroll>
          ) : (
            <Link to="/">
              <MDBNavbarBrand className="flex-center">
                <img
                  src={Logo}
                  alt="BlockOfMagic Logo"
                  className="img-fluid mr-2"
                  width="40px"
                />
                <span className="font-weight-bold">BlockOfMagic</span>
              </MDBNavbarBrand>
            </Link>
          )}
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav right>
              <Link
                to={{
                  pathname: "/",
                  state: {
                    actionCard: 1,
                  },
                }}
              >
                <MDBBtn color="green" outline size="sm">
                  Sign In
                </MDBBtn>
              </Link>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
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
export default withRouter(Navbar);
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Nico Schett
 */
