//#region > Imports
//> Action Types
import * as Action from "../types";
//> Intel
import INTEL_SNEK from "snek-intel/lib/utils/snek";

//> Actions
// Functions to send data from the application to the store
import { getPerson as getUserPerson } from "./userActions";
//#endregion

//#region > Utils
const extractNameFromPersonSlug = (personSlug: any) => personSlug.split("-")[1];
//#endregion

//#region > Actions
/**
 * Get person page for a logged user
 */
/**
 * Get person page for a logged user
 */
const getPerson = (personName: any) => {
  return async (dispatch: any, getState: any, {}) => {
    try {
      dispatch({ type: Action.PERSON_FETCH_REQUEST });

      const person = await INTEL_SNEK.person.get({ personName });

      dispatch({ type: Action.PERSON_FETCH_SUCCESS, payload: person });
    } catch (ex) {
      dispatch({
        type: Action.PERSON_FETCH_FAILURE,
        payload: {
          errorCode: 601,
          message: `Getting person (${personName}) failed`,
          error: ex,
        },
      });
    }
  };
};

const getProfiles = (personName: any) => {
  return async (dispatch: any, getState: any, {}) => {
    try {
      dispatch({ type: Action.PERSON_PROFILES_FETCH_REQUEST });

      const profiles = await INTEL_SNEK.person.profiles({
        personName,
      });

      dispatch({
        type: Action.PERSON_PROFILES_FETCH_SUCCESS,
        payload: profiles,
      });

      return profiles;
    } catch (ex) {
      dispatch({
        type: Action.PERSON_PROFILES_FETCH_FAILURE,
        payload: {
          errorCode: 601,
          message: `Fetching profiles failed`,
          error: ex,
        },
      });
    }
  };
};
//#endregion
//#region > Exports
export { getProfiles, getPerson };
//#endregion
