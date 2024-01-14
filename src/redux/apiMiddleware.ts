// apiMiddleware.ts
import { Middleware, MiddlewareAPI, Dispatch } from 'redux';
import { apiSuccessAction, apiFailureAction } from '../actions'
import {RootState} from "./store";
const apiMiddleware: Middleware<{}, RootState> = (api: MiddlewareAPI<Dispatch, RootState>) => (next: Dispatch) => async (action: any) => {
    if (action.type === 'API_REQUEST') {
        try {
            const response = await fetch(action.payload.url);
            const data = await response.json();

            api.dispatch(apiSuccessAction(data));
        } catch (error) {
            api.dispatch(apiFailureAction(error));
        }
    }

    // Продолжаем выполнение middleware
    return next(action);
};

export default apiMiddleware;
