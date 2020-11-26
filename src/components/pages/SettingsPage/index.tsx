//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";
//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBContainer,
  MDBCol,
  MDBInput,
  MDBTabPane,
  MDBRow,
  MDBSelect,
  MDBSelectOption,
  MDBSelectOptions,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBAnimation,
  MDBIcon,
  MDBTabContent,
  MDBView,
  MDBMask,
  MDBSelectInput,
  MDBBtn,
  MDBListGroup,
  MDBListGroupItem,
  MDBBadge,
  MDBAlert,
  MDBProgress,
} from "mdbreact";
//> Redux
// Allows to React components read data from a Redux store, and dispatch actions
// to the store to update data.
import { connect } from "react-redux";
//> Actions
// Functions to send data from the application to the store
import { getPerson as getUserPerson } from "../../../store/actions/userActions";
//> Stylesheet
import "./settingspage.scss";
//#endregion

interface Props {
  loggedUser: any;
}

//#region > Components
/**
 * @class The navbar for all pages. Contains a login button, a profile menu
 *        depending on whether you are logged in or not and a search field,
 *        to find other users.
 */
class SettingsPage extends React.Component<Props> {
  state = {
    loading: true,
    person: null,
    showProfilePicture: false,
    showNotification: false,
    showSaveButton: false,
    avatarFile: undefined,
    activeItem: 0,
    tabItems: [
      { name: "Profile", icon: "" },
      { name: "Account", icon: "" },
    ],
  };

  render() {
    const { loggedUser } = this.props;
    const { activeItem } = this.state;

    if (loggedUser.person) {
      return (
        <>
          {this.state.showNotification && (
            <div id="notification">
              <MDBContainer>
                <MDBRow className="message">
                  Changes were saved successfully —{"  "}
                </MDBRow>
              </MDBContainer>
            </div>
          )}
          <MDBContainer id="settings">
            <MDBRow>
              <MDBCol md="4">
                <MDBNav pills color="primary" className="flex-column">
                  <MDBNavItem>
                    <MDBRow className="profile">
                      <MDBCol md="3">
                        <img
                          src="https://avatars1.githubusercontent.com/u/55298934?s=460&u=37517fbfe6f4bc3aa2b1f92fa58a348bd977abbe&v=4"
                          className="img-fluid"
                        />
                      </MDBCol>
                      <MDBCol md="8">
                        <p className="font-weight-bold">
                          {loggedUser.username}
                        </p>
                        Profile Settings
                      </MDBCol>
                    </MDBRow>
                  </MDBNavItem>
                  {this.state.tabItems.map((tab, i) => {
                    return (
                      <MDBNavItem key={i} className="clickable">
                        <span
                          className={
                            activeItem === i ? "nav-link active" : "nav-link"
                          }
                          onClick={() => this.setState({ activeItem: i })}
                        >
                          {tab.name}
                          {activeItem === i && tab.icon !== "" && (
                            <MDBAnimation
                              type="fadeInLeft"
                              className="d-inline-block"
                            >
                              <MDBIcon icon={tab.icon} />
                            </MDBAnimation>
                          )}
                        </span>
                      </MDBNavItem>
                    );
                  })}
                </MDBNav>
              </MDBCol>
              <MDBCol md="8">
                <MDBTabContent activeItem={activeItem}>
                  <MDBTabPane tabId={0}>
                    <h5>Profile</h5>
                    <div className="personal-data">
                      <MDBRow>
                        <MDBCol md="6">
                          <p className="font-weight-bold">First name</p>
                          <input
                            type="text"
                            name="firstName"
                            className="form-control"
                            value={loggedUser.person.firstName}
                            placeholder="Firstname"
                          />
                        </MDBCol>
                        <MDBCol md="6">
                          <p className="font-weight-bold">Last name</p>
                          <input
                            type="text"
                            name="lastName"
                            className="form-control"
                            value={loggedUser.person.lastName}
                            placeholder="Lastname"
                          />
                        </MDBCol>
                      </MDBRow>
                      <p className="font-weight-bold">Email</p>
                      <MDBRow>
                        <MDBCol md="12">
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            value={loggedUser.person.email}
                            placeholder="Email"
                            required
                          />
                        </MDBCol>
                      </MDBRow>
                    </div>
                  </MDBTabPane>
                  <MDBTabPane tabId={1}>
                    <h5>Account</h5>
                    <div className="personal-data">
                      <p className="font-weight-bold">Username</p>
                      <MDBRow>
                        <MDBCol md="6">
                          <input
                            type="text"
                            name="firstName"
                            className="form-control"
                            // onChange={this.handleChange}
                            value={loggedUser.username}
                            // placeholder="Firstname"
                          />
                        </MDBCol>
                      </MDBRow>
                    </div>
                  </MDBTabPane>
                </MDBTabContent>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </>
      );
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
              <div className="personal-data">
                <p className="font-weight-bold">Your full name</p>
                <MDBRow>
                  <MDBCol md="6">
                    <input
                      type="text"
                      name="firstName"
                      className="form-control"
                      value={loggedUser.person.firstName}
                      placeholder="Firstname"
                    />
                  </MDBCol>
                  <MDBCol md="6">
                    <input
                      type="text"
                      name="lastName"
                      className="form-control"
                      value={loggedUser.person.lastName}
                      placeholder="Lastname"
                    />
                  </MDBCol>
                </MDBRow>
                <p className="font-weight-bold">Public email</p>
                <MDBRow>
                  <MDBCol md="12">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={loggedUser.person.email}
                      placeholder="Email"
                      required
                    />
                  </MDBCol>
                </MDBRow>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="text-center my-5 py-5">
          <div className="spinner-grow text-success" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }
  }
}
//#endregion

//#region > Redux Mapping
const mapStateToProps = (state: any) => ({
  loggedUser: state.user.user,
  person: state.person,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    getUserPerson: (user: any) => dispatch(getUserPerson(user)),
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
export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Nico Schett
 */
