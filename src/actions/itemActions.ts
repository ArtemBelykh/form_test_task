import {Item} from "../redux/types/itemTypes";

export const addItem = (item: Item) => ({
    type: 'ADD_ITEM',
    payload: item,
});