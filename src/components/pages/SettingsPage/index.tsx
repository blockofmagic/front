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
import { updateSettings } from "../../../store/actions/personActions";
import { getPerson as getUserPerson } from "../../../store/actions/userActions";
//> Stylesheet
import "./settingspage.scss";
//#endregion

//#region > Interfaces
interface Props {
  loggedUser: any;
  saveSettings: any;
}
interface State {
  loading: boolean;
  firstName: string;
  lastName: string;
  email: string;
  showProfilePicture: boolean;
  showNotification: boolean;
  showSaveButton: boolean;
  avatarFile?: File;
  activeItem: number;
  status: number;
  tabItems: { name: string; icon: string }[];
}
//#endregion

//#region > Components
/**
 * @class The navbar for all pages. Contains a login button, a profile menu
 *        depending on whether you are logged in or not and a search field,
 *        to find other users.
 */
class SettingsPage extends React.Component<Props> {
  state: State = {
    loading: true,
    firstName: "",
    lastName: "",
    email: "",
    showProfilePicture: false,
    showNotification: false,
    showSaveButton: false,
    avatarFile: undefined,
    activeItem: 0,
    status: 0,
    tabItems: [
      { name: "Profile", icon: "" },
      { name: "Account", icon: "" },
    ],
  };

  setFirstName = (event: any) => {
    this.setState({ firstName: event.currentTarget.value });
  };

  setLastName = (event: any) => {
    this.setState({ lastName: event.currentTarget.value });
  };

  setMail = (event: any) => {
    this.setState({ email: event.currentTarget.value });
  };

  onSubmit = async () => {
    let nextSettings = {
      avatarImage: undefined,
      bio: undefined,
      display2dCalendar: undefined,
      display3dCalendar: undefined,
      displayEmail: undefined,
      displayProgrammingLanguages: undefined,
      displayRanking: undefined,
      displayWorkplace: undefined,
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      location: undefined,
      movablePool: undefined,
      status: undefined,
      websiteUrl: undefined,
      workplace: undefined,
    };
    const result = await this.props.saveSettings(nextSettings);

    if (result?.payload.error) {
      this.setState({
        updateFail: true,
        errorMsg: result.payload.message,
      });
    } else {
      this.setState({ showNotification: true });
    }
  };

  render() {
    const { activeItem, firstName, lastName, email, status } = this.state;
    const { loggedUser } = this.props;

    if (loggedUser.person) {
      if (status === 0) {
        const { firstName, lastName, email } = this.props.loggedUser.person;

        this.setState({
          firstName,
          lastName,
          email,
          status: 1,
        });
      }

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
                            onChange={this.setFirstName}
                            value={firstName}
                            placeholder="First name"
                          />
                        </MDBCol>
                        <MDBCol md="6">
                          <p className="font-weight-bold">Last name</p>
                          <input
                            type="text"
                            name="lastName"
                            className="form-control"
                            onChange={this.setLastName}
                            value={lastName}
                            placeholder="Last name"
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
                            onChange={this.setMail}
                            value={email}
                            placeholder="Email"
                            required
                          />
                        </MDBCol>
                      </MDBRow>
                      <br />
                      <MDBRow>
                        <MDBCol>
                          <MDBBtn
                            className="btn-block"
                            type="submit"
                            onClick={this.onSubmit}
                          >
                            Save
                          </MDBBtn>
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
                      <br />
                      <MDBRow>
                        <MDBCol>
                          <MDBBtn
                            className="btn-block"
                            type="submit"
                            onClick={this.onSubmit}
                          >
                            Save
                          </MDBBtn>
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
    saveSettings: (nextSettings: any) => dispatch(updateSettings(nextSettings)),
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
