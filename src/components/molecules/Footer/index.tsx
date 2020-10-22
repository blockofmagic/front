//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";
//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { Button } from "react-bootstrap";
//#endregion

//#region > Components
/** @class The footer component for all pages */
class Footer extends React.PureComponent {
  render() {
    return <Button>FOOTER</Button>;
  }
}
//#endregion

//#region > Exports

/**
 * Got access to the history object’s properties and the closest
 * <Route>'s match.
 */
export default Footer;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Nico Schett
 */
