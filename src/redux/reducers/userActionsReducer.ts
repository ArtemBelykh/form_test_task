import { UserAction } from '../types/userActionsTypes';

const userActionsReducer = (state: UserAction[] = [], action: { type: string; payload: UserAction }) => {
    switch (action.type) {
        case 'ADD_USER_ACTION':
            return [...state, action.payload];
        default:
            return state;
    }
};

export default userActionsReducer;