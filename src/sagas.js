import { takeLatest, call, put, all } from "redux-saga/effects";
import {decompose_response, apiFetchCall} from './constants/helpers.js';


// watcher saga: watches for actions dispatched to the store, starts worker saga


export function* watcherSaga() {
  yield takeLatest("API_CALL_REQUEST", workerSaga);


}



// worker saga: makes the api call when watcher saga sees the action
function* workerSaga(action) {
  try {


    const response = yield call(apiFetchCall, action.url);

    // dispatch a success action to the store with the response
    console.log("checking response", response);

    yield put({ type: "API_CALL_SUCCESS", response });

    if (response.length > 0){

      console.log("api response was an array of categories");
      //response object is an array, which is an array of categories
      yield put({type: "SUBMIT_CATEGORIES", categories: response});
    }
    else{

      //response object is just an object, which is the joke object response.
      console.log("api response was a joke");



      yield put({type: "ADD_JOKE", joke: decompose_response(response)});

    }
  
  

  
  } catch (error) {
    // dispatch a failure action to the store with the error
    console.log("checking error", error);

    yield all([ put({ type: "API_CALL_FAILURE",  error }) ])

  }
}