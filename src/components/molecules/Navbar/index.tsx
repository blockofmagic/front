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
  MDBIcon,
  MDBNavItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
} from "mdbreact";
//> Redux
// Allows to React components read data from a Redux store, and dispatch actions
// to the store to update data.
import { connect } from "react-redux";

//> Actions
// Functions to send data from the application to the store
import { logoutAction } from "../../../store/actions/userActions";
//> Style sheet
import "./navbar.scss";
//> Images
import Logo from "../../../assets/navigation/logo.svg";
//#endregion

//#region > Interfaces
interface Props extends RouteComponentProps {
  loggedUser: any;
  logout: any;
}
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
    const { history, loggedUser } = this.props;
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
              {loggedUser.anonymous === false ? (
                <>
                  <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret>
                        <img
                          src="https://avatars1.githubusercontent.com/u/55298934?s=460&u=37517fbfe6f4bc3aa2b1f92fa58a348bd977abbe&v=4"
                          className="z-depth-0"
                          alt={loggedUser.username}
                        />
                      </MDBDropdownToggle>
                      <MDBDropdownMenu className="dropdown-default">
                        <Link to="/settings" className="dropdown-item">
                          Settings
                        </Link>
                        <Link
                          to=""
                          onClick={this.props.logout}
                          className="dropdown-item"
                        >
                          Sign Out
                        </Link>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>
                </>
              ) : (
                <>
                  {location.pathname !== "/" && (
                    <Link
                      to={{
                        pathname: "/",
                        state: {
                          actionCard: 1,
                        },
                      }}
                    >
                      <MDBBtn color="dark" outline size="sm">
                        Sign In
                      </MDBBtn>
                    </Link>
                  )}
                </>
              )}
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    );
  }
}
//#endregion

//#region > Redux Mapping
const mapStateToProps = (state: any) => ({
  loggedUser: { ...state.user.user },
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    logout: () => dispatch(logoutAction()),
  };
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Nico Schett
 */
