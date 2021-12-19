import { createWrapper }  from 'next-redux-wrapper';
import { applyMiddleware, createStore, compose } from "redux";
import { composeWithDevTools} from "redux-devtools-extension";
import { reducer } from "../reducers";
import dayjs from "dayjs";


const configureStore = () => {
    const middlewares = [] as [];
    const enhancer = process.env.NODE_ENV === "production"
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares)) // history 가 많이 쌓이면 보안에 취약함

    const store = createStore(reducer, enhancer);
    return store;

}

const wrapper: any = createWrapper(configureStore, { debug: process.env.NODE_ENV === "development"});

export default wrapper;