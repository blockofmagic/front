//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";
// DOM bindings for React Router
import { RouteComponentProps } from "react-router-dom";
//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { Button } from "react-bootstrap";
//> Components
import { LoginForm, RegisterForm } from "../forms";
//#endregion

//#region > Interfaces
interface Props {
  activeIndex: any;
}
//#endregion

//#region > Components
/**
 * @class The navbar for all pages. Contains a login button, a profile menu
 *        depending on whether you are logged in or not and a search field,
 *        to find other users.
 */
class UserActionCard extends React.Component<Props> {
  state = {
    activeItem: this.props.activeIndex,
  };

  goTo = (item: any) => {
    this.setState({
      activeItem: item,
    });
  };

  setActiveItem = (activeItem: any) => {
    this.setState({
      activeItem,
    });
  };

  render() {
    const { activeItem } = this.state;

    return (
      <div className="text-center" id="useractionscard">
        {activeItem === 0 && (
          <>
            <Button
              className="btn-success btn-block"
              onClick={() => this.setActiveItem(1)}
            >
              Login to BlockOfMagic
            </Button>
            <div className="w-100">
              <div className="splitter mt-3 mb-2">
                <span className="or">
                  <span className="or-text">or</span>
                </span>
              </div>
            </div>
            <Button
              className="btn-info btn-block"
              onClick={() => this.setActiveItem(2)}
            >
              Sign up to BlockOfMagic
            </Button>
          </>
        )}
        {activeItem === 1 && <LoginForm goTo={this.goTo} {...this.props} />}
        {activeItem === 2 && <RegisterForm goTo={this.goTo} {...this.props} />}
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
export default UserActionCard;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Nico Schett
 */
