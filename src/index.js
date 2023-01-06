import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";
import {combineReducers, configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {persistReducer} from "redux-persist";
import App from './App';
import reportWebVitals from './reportWebVitals';
import storage from 'redux-persist/lib/storage';
import RecommendCourseStepReducer from './store/RecommendCourseStep';
import FoodStoreStepReducer from './store/FoodStoreStep';
import AccommodationStep from './store/AccommodationStep';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);


const reducers = combineReducers({
    RecommendCourseStep: RecommendCourseStepReducer,
    FoodStoreStep: FoodStoreStepReducer,
    AccommodationStep: AccommodationStep
});

const persistConfig = {
    key: 'user',
    storage,
    whitelist: ['user'],
};

const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false,
});


const _persistedReducer = persistReducer(persistConfig, reducers);


const store = configureStore({
    reducer: _persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: customizedMiddleware,
});

root.render(
    // useEffect가 2번 호출되는 현상 (개발 단계에서만) 때문에 주석
  //<React.StrictMode>
      <Provider store={store}>
         <App />
      </Provider>
 // </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
