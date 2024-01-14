import { createStore, combineReducers, applyMiddleware, StoreEnhancer } from 'redux';
import thunk, { ThunkMiddleware, ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import categoryReducer from "./reducers/categoryReducer";
import itemReducer from "./reducers/itemReducer";
import userActionsReducer from "./reducers/userActionsReducer";
import apiMiddleware from "./apiMiddleware";

const rootReducer = combineReducers({
    categories: categoryReducer,
    items: itemReducer,
    userActions: userActionsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

const middlewareEnhancer: StoreEnhancer = applyMiddleware(thunk as unknown as ThunkMiddleware<RootState, AppThunk>, apiMiddleware);

const store = createStore(rootReducer, middlewareEnhancer);

export default store;
