import { applyMiddleware, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';

const reducers = combineReducers({

});

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    const middleware = applyMiddleware(sagaMiddleware);
    const store = createStore(reducers, middleware);

    sagaMiddleware.run(sagas);

    return store;
};

