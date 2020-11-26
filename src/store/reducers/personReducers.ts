//#region > Imports
//> Error Serialization
// Serialize/deserialize an error into a plain object
import { serializeError } from "serialize-error";
//> Action Types
import * as Action from "../types";
//#endregion

//#region > Constant Variables
const INIT_STATE = {
  fetchedPerson: undefined,
  profilesProcessed: false,
  error: undefined,
  errorDetails: undefined,
};
//#endregion

//#region > Reducers
const personReducer = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    //> Get person
    case Action.PERSON_FETCH_REQUEST:
      return state;
    case Action.PERSON_FETCH_SUCCESS:
      return {
        ...state,
        fetchedPerson: {
          ...action.payload,
        },
      };
    case Action.PERSON_FETCH_FAILURE:
      return {
        ...state,
        fetchedPerson: undefined,
        error: action.payload,
        errorDetails: serializeError(action.payload.error),
      };
    default:
      return state;
  }
};
//#endregion

//#region > Exports
export default personReducer;
//#endregion
