// src/sagas/index.js
import { all } from "redux-saga/effects";
import watchFetchPosts from "./postSaga"; // Import the default export

export default function* rootSaga() {
  yield all([watchFetchPosts()]); // Call the imported watch function
}
