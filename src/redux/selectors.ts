import {RootState} from "./store";


export const getCategories = (state: RootState) => state.categories;
export const getItems = (state: RootState) => state.items;
export const getUserActions = (state: RootState) => state.userActions;
