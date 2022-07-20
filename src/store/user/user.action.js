import { SET_CURRENT_USER } from "../types";

import { createAction } from "../../utils/reducer/reducer.utils";

export const setCurrentUser = (user) => createAction(SET_CURRENT_USER, user);
