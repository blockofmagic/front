//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
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
}
//#endregion

//#region > Components
/** @class This component displays the landing page including login and register */
class HomePage extends React.Component<Props> {
  render() {
    const activeActionCard = this.props.location?.state?.actionCard;

    return (
      <div id="home" className="pt-5">
        <Grid>
          <Row>
            <Col md={4}>
              <UserActionCard
                activeIndex={activeActionCard ? activeActionCard : 0}
              />
            </Col>
          </Row>
        </Grid>
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
