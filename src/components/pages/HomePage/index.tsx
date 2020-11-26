//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";

import { Line } from "react-chartjs-2";

import {MDBBtn, MDBContainer, MDBTabPane, MDBTabContent, MDBNavLink, MDBNavItem, MDBNav, MDBBadge} from "mdbreact";

import "./homepage.scss";
//#endregion

//#region > Components
/** @class This component displays the landing page including login and register */
class HomePage extends React.Component {

  state = {
    activeItem: "0",

    items: {
      rounded: "1",
      rounded2: "1",
      roundedGradient: "1",
      roundedGradient2: "1",
      roundedOutline: "1",
      roundedOutline2: "1",
    }
  };


  toggle = (tab:any) => (e:any) => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab
      });
    }
  };
  
  state_1 = {
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
          data: [65, 59, 80, 81, 56, 55, 40]
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
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    }
  };

  render() {
    return (
      <div id="home" className="pt-5">
        <MDBContainer>
          <h1 className="text-center font-weight-bold text-justify headline" >BlockOfMagic</h1>
          <h2 className="text-center text-justify subheadline" >verhindert Leid auf der Welt</h2>
        </MDBContainer>
        <br></br>
        <br></br>
        <br></br>
        <MDBContainer>
          <div id="row1">
            <div className="button-container">
              <MDBBtn className="button-left">Transactions</MDBBtn>
              <MDBBtn className="button-centre">Log in / My account</MDBBtn>
              <MDBBtn className="button-right">Statistics and graphics</MDBBtn>
            </div>
          </div>
        </MDBContainer>
        <br></br>
        <br></br>
        <br></br>
        <MDBContainer>
          <div className="d-flex justify-content-center div-background-color">
            <MDBBadge className="text-center div-background-color" ><h3>Was ist BlockOfMagic</h3></MDBBadge>
          </div>
          <br></br>
          <p className="text-center text-justify" >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </MDBContainer>
        <br></br>
        <br></br>
        <br></br>
        <MDBContainer>
        <MDBNav className="nav-tabs mt-5 justify-content-center nav-background-color">

          <MDBNavItem className="nav-link">
            <MDBNavLink link to="#" active={this.state.activeItem === "1"} onClick={this.toggle("1")} role="tab" >
              Über uns
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem className="nav-link">
            <MDBNavLink link to="#" active={this.state.activeItem === "2"} onClick={this.toggle("2")} role="tab" >
              Technik
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem className="nav-link">
            <MDBNavLink link to="#" active={this.state.activeItem === "3"} onClick={this.toggle("3")} role="tab" >
              Team
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>
        <MDBTabContent activeItem={this.state.activeItem} >
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
            <h4 className="mt-5">Example Headline 4</h4>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Nihil odit magnam minima, soluta doloribus reiciendis
              molestiae placeat unde eos molestias. Quisquam aperiam,
              pariatur. Tempora, placeat ratione porro voluptate odit
              minima.
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="3" role="tabpanel">
            <h3 className="mt-5">Example Headline 3</h3>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Nihil odit magnam minima, soluta doloribus reiciendis
              molestiae placeat unde eos molestias. Quisquam aperiam,
              pariatur. Tempora, placeat ratione porro voluptate odit
              minima.
            </p>
            <h4 className="mt-5">Line chart</h4>
            <MDBContainer className="container-blockss">
            <div className="justify-content-center div-blockss">
              <div className="justify-content-left div-float-1">
                <h4 className="teammember-headline text-center">Line chart</h4>
                <img src="https://avatars0.githubusercontent.com/u/55870326?s=200&v=4" className="rounded mx-auto d-block" alt="thumbnail" />
              </div>
              <div className="div-float-2 text-padding">   
                <p className="text-center text-justify" >Lorem ipsum dolor sitt labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            </MDBContainer>
            <br></br>
            <MDBContainer className="container-blockss">
            <div className="justify-content-center div-blockss">
              <div className="justify-content-left div-float-2">
                <h4 className="teammember-headline text-center">Line chart</h4>
                <img src="https://avatars0.githubusercontent.com/u/55870326?s=200&v=4" className="rounded mx-auto d-block" alt="thumbnail" />
              </div>
              <div className="div-float-1 text-padding">   
                <p className="text-center text-justify" >Lorem ipsum dolor sitt labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            </MDBContainer>
          </MDBTabPane>
        </MDBTabContent>
      </MDBContainer>
      <br></br>
      <br></br>
      <br></br>
      <MDBContainer>
        <div className="d-flex justify-content-center div-background-color">
          <MDBBadge className="text-center div-background-color"><h3 className="text-center" >Partner von BlockOfMagic</h3></MDBBadge>
        </div>   
        <br></br>        
        <p className="text-center text-justify" >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        <br></br> 
        <img src="https://avatars0.githubusercontent.com/u/55870326?s=200&v=4" className="rounded mx-auto d-block" alt="thumbnail" />
      </MDBContainer>
      <br></br>
      <br></br>
      <br></br>
      <MDBContainer>
        <div className="d-flex justify-content-center div-background-color">
          <MDBBadge className="text-center div-background-color"><h3>Statistiken und Grafiken vlt.</h3></MDBBadge>
        </div>       
      </MDBContainer>
      <MDBContainer>
        <h3 className="mt-5">Line chart</h3>
        <div className="justify-content-center div-blockss">
          <div className="justify-content-left div-float-1">
            <Line data={this.state_1.dataLine}/>
          </div>
          <div className="float-right div-float-2">
            <p className="text-center text-justify" >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </MDBContainer>  
      <br></br>
      <br></br>
      <br></br>
      <MDBContainer>
        <h3 className="mt-5">Line chart</h3>
        <div className="justify-content-center">
          <div className="justify-content-left div-float-2">
            <Line data={this.state_1.dataLine}/>
          </div>
          <div className="div-float-1">
            <p className="text-center text-justify" >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </MDBContainer>     
      </div>
    );
  }
}
//#endregion

//#region > Exports

/**
 * Provides its connected component with the pieces of the data it needs from
 * the store, and the functions it can use to dispatch actions to the store.
 */
export default HomePage;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Nico Schett
 */
