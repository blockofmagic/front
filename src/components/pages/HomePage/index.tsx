//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";
// DOM bindings for React Router
import { Redirect } from "react-router-dom";
//> Redux
// Allows to React components read data from a Redux store, and dispatch actions
// to the store to update data.
import { connect } from "react-redux";
import { Line } from "react-chartjs-2";
import {
  MDBBtn,
  MDBContainer,
  MDBTabPane,
  MDBTabContent,
  MDBNavLink,
  MDBNavItem,
  MDBNav,
  MDBBadge,
  MDBRow,
  MDBCol,
} from "mdbreact";

//> Components
import { UserActionCard } from "../../molecules";
//> Stylesheet
import "./homepage.scss";
//#endregion

//#region > Interfaces
interface State {
  actionCard: any;
}
interface Location {
  state: State;
}
interface Props {
  location: Location;
  loggedUser: any;
}
//#endregion

//#region > Components
/** @class This component displays the landing page including login and register */
class HomePage extends React.Component<Props> {
  state = {
    activeItem: "0",

    items: {
      rounded: "1",
      rounded2: "1",
      roundedGradient: "1",
      roundedGradient2: "1",
      roundedOutline: "1",
      roundedOutline2: "1",
    },

    dataLine: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(225, 204,230, .3)",
          borderColor: "rgb(205, 130, 158)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(205, 130,1 58)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: "My Second dataset",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(184, 185, 210, .3)",
          borderColor: "rgb(35, 26, 136)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(35, 26, 136)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [28, 48, 40, 19, 86, 27, 90],
        },
      ],
    },
  };

  toggle = (tab: any) => (e: any) => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab,
      });
    }
  };

  render() {
    const { loggedUser } = this.props;
    const activeActionCard = this.props.location?.state?.actionCard;

    if (loggedUser.anonymous == false) {
      return <Redirect to="/settings" />;
    } else {
      return (
        <div id="home" className="pt-5">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="8">
                <h1 className="text-center font-weight-bold text-justify headline">
                  BlockOfMagic
                </h1>
                <h2 className="text-center text-justify subheadline">
                  verhindert Leid auf der Welt
                </h2>
              </MDBCol>
              <MDBCol md="4">
                <UserActionCard
                  activeIndex={activeActionCard ? activeActionCard : 0}
                />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <hr />
          <MDBContainer>
            <div className="d-flex justify-content-center div-background-color">
              <MDBBadge className="text-center div-background-color">
                <h3>Was ist BlockOfMagic</h3>
              </MDBBadge>
            </div>
            <br></br>
            <p className="text-center text-justify">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
          </MDBContainer>
          <br></br>
          <br></br>
          <br></br>
          <MDBContainer>
            <MDBNav className="nav-tabs mt-5 justify-content-center nav-background-color">
              <MDBNavItem className="nav-link">
                <MDBNavLink
                  link
                  to="#"
                  active={this.state.activeItem === "0"}
                  onClick={this.toggle("0")}
                  role="tab"
                >
                  Über uns
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem className="nav-link">
                <MDBNavLink
                  link
                  to="#"
                  active={this.state.activeItem === "1"}
                  onClick={this.toggle("1")}
                  role="tab"
                >
                  Technik
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem className="nav-link">
                <MDBNavLink
                  link
                  to="#"
                  active={this.state.activeItem === "2"}
                  onClick={this.toggle("2")}
                  role="tab"
                >
                  Team
                </MDBNavLink>
              </MDBNavItem>
            </MDBNav>
            <MDBTabContent activeItem={this.state.activeItem}>
              <MDBTabPane tabId="0" role="tabpanel">
                <h3 className="mt-5">Example Headline 3</h3>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nihil odit magnam minima, soluta doloribus reiciendis
                  molestiae placeat unde eos molestias. Quisquam aperiam,
                  pariatur. Tempora, placeat ratione porro voluptate odit
                  minima.
                </p>
                <h4 className="mt-5">Example Headline 4</h4>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nihil odit magnam minima, soluta doloribus reiciendis
                  molestiae placeat unde eos molestias. Quisquam aperiam,
                  pariatur. Tempora, placeat ratione porro voluptate odit
                  minima.
                </p>
              </MDBTabPane>
              <MDBTabPane tabId="1" role="tabpanel">
                <h3 className="mt-5">Example Headline 3</h3>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nihil odit magnam minima, soluta doloribus reiciendis
                  molestiae placeat unde eos molestias. Quisquam aperiam,
                  pariatur. Tempora, placeat ratione porro voluptate odit
                  minima.
                </p>
                <h4 className="mt-5">Example Headline 4</h4>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nihil odit magnam minima, soluta doloribus reiciendis
                  molestiae placeat unde eos molestias. Quisquam aperiam,
                  pariatur. Tempora, placeat ratione porro voluptate odit
                  minima.
                </p>
              </MDBTabPane>
              <MDBTabPane tabId="2" role="tabpanel">
                <h3 className="mt-5">Example Headline 3</h3>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nihil odit magnam minima, soluta doloribus reiciendis
                  molestiae placeat unde eos molestias. Quisquam aperiam,
                  pariatur. Tempora, placeat ratione porro voluptate odit
                  minima.
                </p>
                <MDBContainer className="container-blockss">
                  <MDBRow>
                    <MDBCol>
                      <h4>User1</h4>
                      <p>
                        Lorem ipsum dolor sitt labore et dolore magna aliquyam
                        erat, sed diam voluptua. At vero eos et accusam et justo
                        duo dolores et ea rebum. Stet clita kasd gubergren, no
                        sea takimata sanctus est Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet.
                      </p>
                    </MDBCol>
                    <MDBCol md="2">
                      <img
                        src="https://avatars0.githubusercontent.com/u/55870326?s=200&v=4"
                        alt="thumbnail"
                        width="170"
                      />
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
                <br></br>
                <MDBContainer className="container-blockss">
                  <MDBRow>
                    <MDBCol md="2">
                      <img
                        src="https://avatars0.githubusercontent.com/u/55870326?s=200&v=4"
                        alt="thumbnail"
                        width="170"
                      />
                    </MDBCol>
                    <MDBCol>
                      <h4>User2</h4>
                      <p>
                        Lorem ipsum dolor sitt labore et dolore magna aliquyam
                        erat, sed diam voluptua. At vero eos et accusam et justo
                        duo dolores et ea rebum. Stet clita kasd gubergren, no
                        sea takimata sanctus est Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet.
                      </p>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </MDBTabPane>
            </MDBTabContent>
          </MDBContainer>
          <br></br>
          <br></br>
          <br></br>
          <MDBContainer>
            <div className="d-flex justify-content-center div-background-color">
              <MDBBadge className="text-center div-background-color">
                <h3 className="text-center">Partner von BlockOfMagic</h3>
              </MDBBadge>
            </div>
            <br></br>
            <img
              src="https://avatars0.githubusercontent.com/u/55870326?s=200&v=4"
              className="rounded mx-auto d-block"
              alt="thumbnail"
            />
          </MDBContainer>
          <br></br>
          <br></br>
          <br></br>
          <MDBContainer>
            <h3 className="mt-5">Line chart</h3>
            <MDBRow>
              <MDBCol>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
              </MDBCol>
              <MDBCol>
                <Line data={this.state.dataLine} />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <MDBContainer>
            <h3 className="mt-5">Line chart</h3>
            <MDBRow>
              <MDBCol>
                <Line data={this.state.dataLine} />
              </MDBCol>
              <MDBCol>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <br></br>
          <br></br>
          <br></br>
        </div>
      );
    }
  }
}
//#endregion

//#region > Redux Mapping
const mapStateToProps = (state: any) => ({
  loggedUser: state.user.user,
});

const mapDispatchToProps = (dispatch: any) => {
  return {};
};
//#endregion

//#region > Exports

/**
 * Provides its connected component with the pieces of the data it needs from
 * the store, and the functions it can use to dispatch actions to the store.
 */
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Nico Schett
 */
