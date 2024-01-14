import { Category } from '../types/categoryTypes';

const categoryReducer = (state: Category[] = [], action: { type: string; payload: Category }) => {
    switch (action.type) {
        case 'ADD_CATEGORY':
            return [...state, action.payload];
        default:
            return state;
    }
};

export default categoryReducer;