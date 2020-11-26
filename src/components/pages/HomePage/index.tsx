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

//> Components
import { UserActionCard } from "../../molecules";
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
  render() {
    const { loggedUser } = this.props;
    const activeActionCard = this.props.location?.state?.actionCard;

    if (loggedUser.anonymous == false) {
      return <Redirect to="/settings" />;
    } else {
      return (
        <div id="home" className="pt-5">
          <div className="container">
            <div className="row">
              <div className="col-4">
                <UserActionCard
                  activeIndex={activeActionCard ? activeActionCard : 0}
                />
              </div>
            </div>
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
