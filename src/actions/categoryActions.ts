import {Category} from "../redux/types/categoryTypes";

export const addCategory = (category: Category) => ({
    type: 'ADD_CATEGORY',
    payload: category,
});
