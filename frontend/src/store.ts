import { configureStore } from "@reduxjs/toolkit";
import songReducer from "./slices/songSlice";
import statsReducer from "./slices/statSlice";
import createSagaMiddleware from "redux-saga";
import songSaga from "./songSaga";
import statsSaga from "./statSaga";
import { all } from "redux-saga/effects";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    songs: songReducer,
    stats: statsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

function* rootSaga() {
  yield all([songSaga(), statsSaga()]);
}

sagaMiddleware.run(rootSaga);

export default store;
