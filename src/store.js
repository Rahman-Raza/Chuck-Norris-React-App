import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { combineReducers } from 'redux'

import {api_reduc} from './reducers/api_reduc.js';
import {categories} from './reducers/categories.js';
import {jokes} from './reducers/jokes.js';



const sagaMiddleWare = createSagaMiddleware();

const rootReducer = combineReducers({
 api_reduc, categories, jokes
})


export const configureStore = (initialState={}) =>{


 return { 
 	store: 
 	createStore(
   			rootReducer,
   			compose( applyMiddleware(sagaMiddleWare) )
   			),
 	sagaMiddleWare: sagaMiddleWare,

	}
}