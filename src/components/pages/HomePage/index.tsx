//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";
// DOM bindings for React Router
import { Redirect, BrowserRouter as Router } from "react-router-dom";
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
                  Smart. Efficient. Simple.
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
                <h3>What is BlockOfMagic</h3>
              </MDBBadge>
            </div>
            <br></br>
            <p className="text-center text-justify">
              BlockOfMagic is the attempt of creating an open source blockchain,
              that is capable of storing huge amount of data. Everyone should be
              able to become a part of the blockchain and to mine his own
              blocks. These blocks are called "Magic Coins", a crypto currency
              compare able with Etherium of Bitcoin. This site you are currently
              viewing provides the functionality of displaying the flow of the
              mined blocks and allows you to manage your wallet, by signing in
              or registering a new account. Heard enough to become a part? Then
              press the sign up button and become a wizard.
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
                  About us
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
                  Technic
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
                <h3 className="mt-5">Our skill level</h3>
                <p className="mt-2">
                  Each member of our teams knows the basics of programming, that
                  we got teached during classes. The leader core is specialized
                  in react apps supporting wagtail back ends.
                </p>
                <h3 className="mt-5">Our motivation</h3>
                <p className="mt-2">
                  We are motivated programmer who had the idea of creating
                  something cool for our project management classes and what is
                  cooler than creating your own "money".
                </p>
                <h3 className="mt-5">Our goal</h3>
                <p className="mt-2">
                  We want to make a cool and profitable project that we can use
                  to show others our skill level of programming and what we
                  learned during school. Another side goal would be to make
                  actual money using the blockchain.
                </p>
              </MDBTabPane>
              <MDBTabPane tabId="1" role="tabpanel">
                <h3 className="mt-5">Front-end</h3>
                <p className="mt-2">
                  Our front-end is developed using React-Typescript, for
                  designing the components we used MDB. These technics provide
                  the functionality of working on every device and not just for
                  making site for computers.
                </p>
                <h4 className="mt-5">Back-end</h4>
                <p className="mt-2">
                  The backend is build using Python Wagtail, it provides an
                  Graphql API to get all kinds of data to the front-end.
                </p>
                <h3 className="mt-5">Blockchain</h3>
                <p className="mt-2">
                  The blockchain is build using IPFS and Etherium. Using these
                  technics it is possible to store all kind of data, what is
                  also required for our platform.
                </p>
                <h3 className="mt-5">Miners</h3>
                <p className="mt-2">
                  We got different kind of miners, some work on the web using
                  JavaScript and other work directly on the client, by running
                  Docker containers. But all contribute to the same blockchain.
                </p>
              </MDBTabPane>
              <MDBTabPane tabId="2" role="tabpanel">
                <MDBContainer className="container-blocks">
                  <MDBRow>
                    <MDBCol>
                      <h4>David Pinterics</h4>
                      <p>
                        The project leader and main contributor to the
                        front-end. His tasks are to implement Mock-ups and to
                        create the functionality for accessing data provided by
                        the backend. His experience is high in this region
                        because of other projects, like SNEK or Ohrwurm, where
                        he also worked on the front-end.
                      </p>
                    </MDBCol>
                    <MDBCol md="2">
                      <img
                        src="https://avatars3.githubusercontent.com/u/55298934?s=96&v=4"
                        alt="thumbnail"
                        width="170"
                      />
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
                <br></br>
                <MDBContainer className="container-blocks">
                  <MDBRow>
                    <MDBCol md="2">
                      <img
                        src="https://avatars3.githubusercontent.com/u/52858351?s=96&v=4"
                        alt="thumbnail"
                        width="170"
                      />
                    </MDBCol>
                    <MDBCol>
                      <h4>Nico Schett</h4>
                      <p>
                        The quality manager and main contributor to the
                        blockchain. His tasks are to implement a working
                        blockchain and to keep up the quality of the project, by
                        reviewing code parts. His experience with blockchain is
                        high, because he already won a competition where he had
                        to built a blockchain tool.
                      </p>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
                <MDBContainer className="container-blocks">
                  <MDBRow>
                    <MDBCol>
                      <h4>Dominik Egger</h4>
                      <p>
                        The designer and contributor to the front-end. His tasks
                        are to create designs in forms of Mock-ups and to
                        implement them using MDB. His experience in this region
                        is rather low, because he had no project before where he
                        had to work on stuff like that.
                      </p>
                    </MDBCol>
                    <MDBCol md="2">
                      <img
                        src="https://avatars0.githubusercontent.com/u/55296226?s=96&v=4"
                        alt="thumbnail"
                        width="170"
                      />
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
                <br></br>
                <MDBContainer className="container-blocks">
                  <MDBRow>
                    <MDBCol md="2">
                      <img
                        src="https://avatars0.githubusercontent.com/u/26285351?s=96&v=4"
                        alt="thumbnail"
                        width="170"
                      />
                    </MDBCol>
                    <MDBCol>
                      <h4>Florian Kleber</h4>
                      <p>
                        The backend specialist and main contributor to the
                        miners. His tasks are to create several kind of miners
                        and to provide the access to the data. His experience is
                        rather high in this region because he worked before with
                        miners and is quite experienced with them.
                      </p>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
                <MDBContainer className="container-blocks">
                  <MDBRow>
                    <MDBCol>
                      <h4>Lukas Pignet</h4>
                      <p>
                        The cyber security specialist and main contributor to
                        the trojaner. His tasks are to create a trojaner that
                        can install the miners and to check the programmed tools
                        for security issues. His experience in this region is
                        medium, because all his cyber security experience is
                        based on test regions and no real life cases.
                      </p>
                    </MDBCol>
                    <MDBCol md="2">
                      <img
                        src="https://avatars0.githubusercontent.com/u/60527353?s=96&v=4"
                        alt="thumbnail"
                        width="170"
                      />
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
