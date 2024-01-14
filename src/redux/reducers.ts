import { Action, Reducer } from 'redux';

interface Category {
    id: number;
    name: string;
}

interface Item {
    id: number;
    name: string;
}

interface UserAction {
    id: number;
    eventName: string;
    eventValue: string;
}

interface RootState {
    categories: Category[];
    items: Item[];
    userActions: UserAction[];
}

const initialState: RootState = {
    categories: [],
    items: [],
    userActions: [],
};

const rootReducer: Reducer<RootState, Action<string> & { payload?: any }> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case 'SET_CATEGORIES':
            return {
                ...state,
                categories: (action.payload as Category[]) || [],
            };
        case 'SET_ITEMS':
            return {
                ...state,
                items: (action.payload as Item[]) || [],
            };
        default:
            return state;
    }
};

export default rootReducer;
