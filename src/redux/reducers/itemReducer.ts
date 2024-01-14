import { Item } from '../types/itemTypes';

const itemReducer = (state: Item[] = [], action: { type: string; payload: Item }) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.payload];
        default:
            return state;
    }
};

export default itemReducer;
