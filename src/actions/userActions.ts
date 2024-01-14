import {UserAction} from "../redux/types/userActionsTypes";

export const addUserAction = (userAction: UserAction) => ({
    type: 'ADD_USER_ACTION',
    payload: userAction,
});